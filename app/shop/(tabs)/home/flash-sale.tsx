import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import FlashSaleBackground from "@/assets/images/flash-sale-background.png";
import LiveSale from "@/assets/images/live-sale.png";
import FilterIcon from "@/assets/images/filter-icon.png";
import CountDownTimer from "@/src/components/CountDownTimer";
import DiscountSelector from "@/src/components/DiscountSelector";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { discountedItems, justForYouItems, popularItems } from "@/src/data/shop-tabs-data";
import JustForYouItem from "@/src/components/JustForYouItem";
import { ItemType } from "@/src/types/shop-tabs";
import Banner from "@/src/components/Banner";
import SeeAllButton from "@/src/components/SeeAllButton";
import PopularItemLayout from "@/src/components/PopularItem";

export default function FlashSaleScreen() {
    return (
        <View style={styles.container}>

            <ImageBackground
                source={FlashSaleBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Flash Sale
                        </Text>
                        <Text style={styles.description}>
                            Choose Your Discount
                        </Text>
                    </View>
                    <CountDownTimer hours={0} minutes={36} seconds={58}
                        imageStyle={styles.clockStyle}
                        cardStyle={styles.countDownCardColor}
                    />
                </View>
                <View style={styles.discountContainer}>
                    <View style={styles.discountContainerBackground}></View>
                    <DiscountSelector />
                </View>
                <ScrollView style={styles.scrollViewContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.liveContainer}>
                        <Image source={LiveSale} style={styles.liveSaleImage} />

                        <View style={styles.playButtonContainer}>
                            <FontAwesome5 name="play" size={17} color="#ffffff" />
                        </View>

                        <View style={styles.liveTextContainer}>
                            <Text style={styles.liveText}>Live</Text>
                        </View>
                    </View>

                    <View style={styles.discountItemsContainer}>
                        <View style={styles.listHeader}>
                            <Text style={styles.listTitle}>20% Discount</Text>
                            <Image source={FilterIcon} style={styles.filterIcon} />
                        </View>
                        <FlatList
                            data={discountedItems}
                            renderItem={({ item, index }) => {
                                if (item.type === ItemType.BANNER) {
                                    return (
                                        <View style={{ marginVertical: 20 }}>
                                            <Banner
                                                key={item.id}
                                                image={item.image} />
                                        </View>
                                    );
                                } else {
                                    return (
                                        <JustForYouItem
                                            key={item.id}
                                            index={index}
                                            title={item.title}
                                            price={item.price}
                                            discountedPrice={item.discountedPrice}
                                            imageUrl={item.image} />
                                    );
                                }
                            }}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={2}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.horizontalList}
                        />
                    </View>

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
                </ScrollView>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    backgroundContainer: {
        position: "absolute",
        width: "100%",
        aspectRatio: 1.5,
        top: 0,
        start: 0,
    },
    foregroundContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 56,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    clockStyle: {
        width: 18,
        height: 18,
        tintColor: "#ffffff",
    },
    countDownCardColor: {
        backgroundColor: "#ffffff"
    },
    titleContainer: {

    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 36,
        color: "#202020",
    },
    description: {
        fontSize: 14,
        fontWeight: "medium",
        lineHeight: 18,
        color: "#202020",
    },
    discountContainer: {
        justifyContent: "center",
        alignContent: "center",
        marginTop: 24,
    },
    discountContainerBackground: {
        width: "100%",
        position: "absolute",
        backgroundColor: "#F9F9F9",
        borderRadius: 8,
        padding: 16,
    },
    scrollViewContainer: {
        marginTop: 16,
    },
    liveContainer: {
        borderColor: "#E9E5E5",
        alignItems: "center",
        borderRadius: 13,
        borderWidth: 1,
        paddingTop: 8,
        overflow: "hidden",
    },
    liveSaleImage: {
        width: "100%",
    },
    playButtonContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    liveTextContainer: {
        position: "absolute",
        bottom: 6,
        right: 6,
        backgroundColor: "#08C514",
        borderRadius: 4,
    },
    liveText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    discountItemsContainer: {
        marginTop: 26,
    },
    filterIcon: {
        width: 18,
        height: 18,
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
    popularContainer: {
        marginTop: 24,
    },
});
