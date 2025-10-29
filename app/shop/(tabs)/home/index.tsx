import SeeAllButton from "@/src/components/SeeAllButton";
import { categories, justForYouItems, newItems, popularItems, saleItems, slides, topProducts } from "@/src/data/shop-tabs-data";
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
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
import { useTheme } from "@/src/theme/ThemeProvider";
import PageDotIndicator from "@/src/components/PageDotIndicator";

export default function HomeScreen() {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const router = useRouter();
    const pagerRef = useRef<PagerView>(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prev) => {
                const nextPage = (prev + 1) % slides.length;
                pagerRef.current?.setPage(nextPage);
                return nextPage;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={[commonStyles.screenContainer]}>
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

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sliderContainer}>
                    <PagerView
                        style={styles.pagerView}
                        initialPage={0}
                        onPageSelected={(event) => setPage(event.nativeEvent.position)}
                        ref={pagerRef}>
                        {slides.map((slide) => {
                            return (
                                <Banner key={slide.id} image={slide.image} />
                            );
                        })}
                    </PagerView>
                    <PageDotIndicator
                        count={slides.length}
                        activeIndex={page}
                        size={10}
                        gap={10}
                        containerStyle={styles.pagination}
                        selectedDotStyle={styles.selectedDot}
                    />
                </View>
                <CategorySection categories={categories} />

                <TopProductsSection items={topProducts} />

                <NewItemsList items={newItems} />

                <FlashSaleSection items={saleItems} onPress={() => {
                    router.push('/shop/(tabs)/home/flash-sale');
                }} />

                <View style={styles.popularContainer}>
                    <View style={commonStyles.listHeader}>
                        <Text style={commonStyles.listTitle}>Most Popular</Text>
                        <SeeAllButton />
                    </View>

                    <FlatList
                        data={popularItems}
                        renderItem={({ item }) => {
                            return (
                                <PopularItemLayout
                                    key={item.id}
                                    likes={item.totalLikes}
                                    tagText={item.tag}
                                    imageUrl={item.image} />
                            );
                        }}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalList}
                    />
                </View>

                <JustForYouSection items={justForYouItems} />

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
        marginTop: theme.metrics.spacing.medium,
    },
    pagerView: {
        width: "100%",
        aspectRatio: 2.5,
    },
    pagination: {
        marginVertical: theme.metrics.spacing.small,
    },
    selectedDot: {
        width: theme.metrics.componentSizes.selectedIndicatorWidth,
    },
    horizontalList: {
        gap: theme.metrics.spacing.xSmall,
    },
    popularContainer: {
        marginTop: theme.metrics.spacing.xLarge,
    },
}));
