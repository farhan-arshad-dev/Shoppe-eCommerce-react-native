import { FlatList, Image, ImageBackground, ScrollView, Text, View } from "react-native";
import FlashSaleBackground from "@/assets/images/flash-sale-background.png";
import LiveSale from "@/assets/images/live-sale.png";
import FilterIcon from "@/assets/images/filter-icon.png";
import CountDownTimer from "@/src/components/CountDownTimer";
import DiscountSelector from "@/src/components/DiscountSelector";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { discountedItems, popularItems, videoUrls } from "@/src/data/shop-tabs-data";
import JustForYouItem from "@/src/components/JustForYouItem";
import { ItemType } from "@/src/types/shop-tabs";
import Banner from "@/src/components/Banner";
import LiveTag from "@/src/components/LiveTag";
import MostPopularList from "@/src/components/MostPopularListSection";
import VideoPlayer from "@/src/components/VideoPlayer";
import { useState } from "react";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useTheme } from "@/src/theme/ThemeProvider";
import { makeStyles } from "@/src/theme/makeStyles";

export default function FlashSaleScreen() {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const [isSaleVideoPlaying, setIsSaleVideoPlaying] = useState(false);
    console.log()

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
                    showsVerticalScrollIndicator={false}>

                    <View style={styles.liveContainer}>
                        <VideoPlayer videoSource={videoUrls[0]} onPlayStateChange={(isPlaying) => setIsSaleVideoPlaying(isPlaying)} />
                        {!isSaleVideoPlaying &&
                            (<View style={[
                                commonStyles.container,
                                commonStyles.fillParent
                            ]}>
                                <Image
                                    source={LiveSale}
                                    style={[commonStyles.fillParent]}
                                />

                                <View style={styles.playButtonContainer}>
                                    <FontAwesome5
                                        name="play"
                                        size={theme.metrics.iconCardSize.playIcon}
                                        color={theme.colors.background} />
                                </View>
                            </View>)}
                        <View style={styles.liveTagContainer}>
                            <LiveTag />
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

                    <MostPopularList items={popularItems} />

                </ScrollView>
            </View>
        </View >
    )
}

const useStyles = makeStyles((theme) => ({
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
        width: "100%",
        aspectRatio: "2",
        borderColor: "#E9E5E5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 13,
        borderWidth: 1,
        overflow: "hidden",
    },
    playButtonContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    liveTagContainer: {
        position: "absolute",
        bottom: 6,
        right: 6,
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
}))
