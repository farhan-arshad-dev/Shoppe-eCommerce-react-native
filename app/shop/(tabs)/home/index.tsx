import SeeAllButton from "@/src/components/SeeAllButton";
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, ScrollView, Text, TextInput, View } from "react-native";
import PagerView from "react-native-pager-view";
import PopularItemLayout from "@/src/components/PopularItem";
import { useRouter } from "expo-router";
import Banner from "@/src/components/Banner";
import NewItemsList from "@/src/components/NewItemsListSection";
import CategorySection from "@/src/components/CategorySection";
import FlashSaleSection from "@/src/components/FlashSaleSection";
import TopProductsSection from "@/src/components/TopProductsSection";
import JustForYouSection from "@/src/components/JustForYouSection";
import { makeStyles } from "@/src/theme/makeStyles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useTheme } from "@/src/providers/ThemeProvider";
import PageDotIndicator from "@/src/components/PageDotIndicator";
import { useProductsQuery } from "@/src/hooks/useProductsQuery";

export default function HomeScreen() {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const router = useRouter();
    const pagerRef = useRef<PagerView>(null);
    const [page, setPage] = useState(0);

    const { data, isLoading, isError, refetch } = useProductsQuery();

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prev) => {
                const nextPage = (prev + 1) % (data?.sliderItems ? data?.sliderItems?.length : 1);
                pagerRef.current?.setPage(nextPage);
                return nextPage;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [data?.sliderItems]);

    if (isLoading) {
        return (
            <View style={[commonStyles.centerFull]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    if (isError) {
        return (
            <View style={[commonStyles.centerFull]}>
                <Text>Failed to load products</Text>
            </View>
        );
    }

    if (!data || Object.keys(data).length === 0) {
        return (
            <View style={[commonStyles.centerFull]}>
                <Text>No products to show</Text>
            </View>
        );
    }

    return (
        <View style={[commonStyles.containerWithPadding]}>
            <View style={commonStyles.header}>
                <Text style={styles.title}>Shop</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor={theme.colors.primaryPlaceHolder}
                        autoCapitalize='none'
                    />
                    <Feather
                        name="camera"
                        size={theme.metrics.componentSizes.cameraIcon}
                        color={theme.colors.primary} />
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={refetch} />
                }>
                {data.sliderItems && (
                    <View style={styles.sliderContainer}>
                        <PagerView
                            style={commonStyles.bannerView}
                            initialPage={0}
                            onPageSelected={(event) => setPage(event.nativeEvent.position)}
                            ref={pagerRef}>
                            {data.sliderItems.map((slide) => {
                                return (
                                    <Banner key={slide.id} image={slide.images[0]} />
                                );
                            })}
                        </PagerView>
                        <PageDotIndicator
                            count={data.sliderItems.length}
                            activeIndex={page}
                            size={10}
                            gap={10}
                            containerStyle={styles.pagination}
                            selectedDotStyle={styles.selectedDot}
                        />
                    </View>
                )}

                {data.categories && (
                    <CategorySection categories={data.categories} />
                )}

                {data.topProducts && (
                    <TopProductsSection items={data.topProducts} />
                )}

                {data.newItems && (
                    <NewItemsList
                        items={data.newItems}
                        onItemPress={(productId) => {
                            router.push({
                                pathname: "/product-detail",
                                params: { productId }
                            })
                        }}
                    />
                )}

                {data.saleItems && (
                    <FlashSaleSection items={data.saleItems} onPress={() => {
                        router.push('/shop/(tabs)/home/flash-sale');
                    }} />
                )}

                {data.popularItems && (
                    <View style={styles.popularContainer}>
                        <View style={commonStyles.listHeader}>
                            <Text style={commonStyles.listTitle}>Most Popular</Text>
                            <SeeAllButton />
                        </View>

                        <FlatList
                            data={data.popularItems}
                            renderItem={({ item }) => {
                                return (
                                    <PopularItemLayout
                                        key={item.id}
                                        likes={item.totalLikes}
                                        tagText={item.tag}
                                        imageUrl={item.images[0]} />
                                );
                            }}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={commonStyles.horizontalListGap}
                        />
                    </View>
                )}

                {data.justForYouItems && (
                    <JustForYouSection items={data.justForYouItems} />
                )}
            </ScrollView>
        </View >
    )
}

const useStyles = makeStyles((theme) => ({
    title: {
        ...theme.typography.fontStyle.headlineLarge,
        marginRight: theme.metrics.spacing.large,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: theme.colors.surface,
        paddingVertical: theme.metrics.spacing.xSmall,
        paddingHorizontal: theme.metrics.spacing.medium,
        borderRadius: theme.metrics.borderRadius.xlarge,
    },
    searchInput: {
        ...theme.typography.fontStyle.headlineXSmall,
        flex: 1,
        fontFamily: theme.typography.fontFamily.RalewayMedium,
        marginEnd: theme.metrics.spacing.medium,
    },
    sliderContainer: {
        marginTop: theme.metrics.spacing.tiny,
    },
    pagination: {
        marginVertical: theme.metrics.spacing.small,
    },
    selectedDot: {
        width: theme.metrics.componentSizes.selectedIndicatorWidth,
    },
    popularContainer: {
        marginTop: theme.metrics.spacing.xLarge,
    },
}));
