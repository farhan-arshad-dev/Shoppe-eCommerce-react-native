import { FlatList, Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
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
import { useRouter } from "expo-router";

export default function FlashSaleScreen() {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const router = useRouter();

    const [isSaleVideoPlaying, setIsSaleVideoPlaying] = useState(false);
    console.log(`Started Live Sale Video: ${isSaleVideoPlaying}`)

    return (
        <View style={commonStyles.container}>

            <ImageBackground
                source={FlashSaleBackground}
                style={[
                    commonStyles.backgroundContainer,
                    styles.backgroundContainer
                ]}
                resizeMode="cover" />

            <View style={[commonStyles.containerWithPadding,
            styles.foregroundContainer]}>
                <View style={commonStyles.header}>
                    <View>
                        <Text style={styles.title}>
                            Flash Sale
                        </Text>
                        <Text style={styles.description}>
                            Choose Your Discount
                        </Text>
                    </View>
                    <CountDownTimer hours={0} minutes={36} seconds={58}
                        imageStyle={styles.clockImageStyle}
                        cardStyle={styles.countDownCard}
                    />
                </View>
                <View style={[commonStyles.centerContent, styles.discountContainer]}>
                    <View style={styles.discountContainerBackground} />
                    <DiscountSelector />
                </View>
                <ScrollView style={styles.scrollViewContainer}
                    showsVerticalScrollIndicator={false}>

                    <Pressable style={styles.liveContainer} onPress={() => {
                        router.push("/shop/home/live-sale");
                    }}>
                        <VideoPlayer videoSource={videoUrls.regularVideo} onPlayStateChange={(isPlaying) => setIsSaleVideoPlaying(isPlaying)} />
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
                                        size={theme.metrics.componentSizes.playIcon}
                                        color={theme.colors.background} />
                                </View>
                            </View>)}
                        <View style={styles.liveTagContainer}>
                            <LiveTag />
                        </View>
                    </Pressable>
                    <View style={styles.discountItemsContainer}>
                        <View style={commonStyles.listHeader}>
                            <Text style={commonStyles.listTitle}>20% Discount</Text>
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
                            contentContainerStyle={commonStyles.horizontalListGap}
                        />
                    </View>

                    <MostPopularList items={popularItems} />

                </ScrollView>
            </View>
        </View >
    )
}

const useStyles = makeStyles((theme) => ({
    backgroundContainer: {
        aspectRatio: 1.5,
    },
    foregroundContainer: {
        backgroundColor: "transparent",
    },
    clockImageStyle: {
        width: theme.metrics.spacing.mediumLarge,
        height: theme.metrics.spacing.mediumLarge,
        tintColor: theme.colors.background,
    },
    countDownCard: {
        backgroundColor: theme.colors.background,
    },
    title: {
        ...theme.typography.fontStyle.headlineLarge,
        color: theme.colors.primaryText,
    },
    description: {
        ...theme.typography.fontStyle.bodyMedium,
        color: theme.colors.primaryText,
    },
    discountContainer: {
        marginTop: theme.metrics.spacing.smallMedium,
    },
    discountContainerBackground: {
        position: "absolute",
        width: "100%",
        backgroundColor: theme.colors.surface,
        borderRadius: theme.metrics.borderRadius.smallMedium,
        padding: theme.metrics.spacing.medium,
    },
    scrollViewContainer: {
        marginTop: theme.metrics.spacing.medium,
    },
    liveContainer: {
        width: "100%",
        aspectRatio: "2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.metrics.borderRadius.large,
        borderWidth: theme.metrics.componentSizes.borderWidth,
        borderColor: theme.colors.border,
        overflow: "hidden",
    },
    playButtonContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
    },
    liveTagContainer: {
        position: "absolute",
        bottom: theme.metrics.spacing.xSmall,
        right: theme.metrics.spacing.xSmall,
    },
    discountItemsContainer: {
        marginTop: theme.metrics.spacing.xLarge,
    },
    filterIcon: {
        width: theme.metrics.componentSizes.filterIcon,
        height: theme.metrics.componentSizes.filterIcon,
    },
}))
