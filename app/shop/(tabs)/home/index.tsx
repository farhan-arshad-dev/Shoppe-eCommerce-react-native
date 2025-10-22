import SeeAllButton from "@/src/components/SeeAllButton";
import { categories, justForYouItems, newItems, popularItems, saleItems, slides, topProducts } from "@/src/data/shop-tabs-data";
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PagerView from "react-native-pager-view";
import PopularItemLayout from "@/src/components/PopularItem";
import Ionicons from '@expo/vector-icons/Ionicons';
import JustForYouItem from "@/src/components/JustForYouItem";
import { useRouter } from "expo-router";
import Banner from "@/src/components/Banner";
import AvatarImage from "@/src/components/AvatarImage";
import NewItemsList from "@/src/components/NewItemsListSection";
import CategorySection from "@/src/components/CategorySection";
import FlashSaleSection from "@/src/components/FlashSaleSection";
import TopProductsSection from "@/src/components/TopProductsSection";
import JustForYouSection from "@/src/components/JustForYouSection";

export default function HomeScreen() {

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Shop</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor="#C7C7C7"
                        autoCapitalize='none'
                    />
                    <Feather name="camera" size={20} color="#0042E0" style={styles.cameraIcon} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sliderContainer}>
                    <PagerView
                        style={styles.pagerView}
                        initialPage={0}
                        onPageSelected={(e) => setPage(e.nativeEvent.position)}
                        ref={pagerRef}>
                        {slides.map((slide) => {
                            return (
                                <Banner key={slide.id} image={slide.image} />
                            );
                        })}
                    </PagerView>

                    <View style={styles.pagination}>
                        {slides.map((_, i) => (
                            <View
                                key={i}
                                style={i === page ? styles.selectedDot : styles.dot}
                            />
                        ))}
                    </View>
                </View>
                <CategorySection categories={categories} />

                <TopProductsSection items={topProducts} />

                <NewItemsList items={newItems} />

                <FlashSaleSection items={saleItems} onPress={() => {
                    router.push('/shop/(tabs)/home/flash-sale');
                }} />

                <View style={styles.popularContainer}>
                    <View style={styles.listHeader}>
                        <Text style={styles.listTitle}>Most Popular</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 56,
        backgroundColor: "#ffffff",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 36,
        color: "#202020",
        marginRight: 20,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#F8F8F8",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 18,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: "medium",
        lineHeight: 21,
    },
    cameraIcon: {
        marginStart: 16,
    },
    sliderContainer: {
        justifyContent: "flex-start",
        marginTop: 16,
    },
    pagerView: {
        width: "100%",
        aspectRatio: 2.5,
    },
    slide: {
        width: "100%",
        aspectRatio: 2.5,
        overflow: "hidden",
        borderRadius: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: "#C7D6FB",
    },
    selectedDot: {
        width: 40,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: "#004CFF"
    },
    listHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        justifyContent: "space-between"
    },
    listTitle: {
        fontSize: 21,
        fontWeight: "bold",
        lineHeight: 30,
        color: "#202020",
        marginRight: 8,
    },
    horizontalList: {
        gap: 8,
    },
    flashSaleContainer: {
        marginTop: 28,
    },
    popularContainer: {
        marginTop: 24,
    },
});
