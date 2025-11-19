import { Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import CountDownTimer from "@/src/components/CountDownTimer";
import DiscountSelector from "@/src/components/DiscountSelector";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import LiveTag from "@/src/components/LiveTag";
import MostPopularList from "@/src/components/MostPopularListSection";
import VideoPlayer from "@/src/components/VideoPlayer";
import { useState } from "react";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useTheme } from "@/src/providers/ThemeProvider";
import { makeStyles } from "@/src/theme/makeStyles";
import { useRouter } from "expo-router";
import DiscountGrideList from "@/src/components/DiscountGrideList";
import { FilterIcon, FlashSaleBackground, LiveSale, MOCK_PRODUCTS_DATA, VideoUrls } from "@/src/data/defaults";

export default function FlashSaleScreen() {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const router = useRouter();

    const [isSaleVideoPlaying, setIsSaleVideoPlaying] = useState(false);

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
                        <VideoPlayer videoSource={VideoUrls.regularVideo} onPlayStateChange={(isPlaying) => setIsSaleVideoPlaying(isPlaying)} />
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
                        <DiscountGrideList items={MOCK_PRODUCTS_DATA.discountedItems} />
                    </View>

                    <MostPopularList items={MOCK_PRODUCTS_DATA.popularItems} />

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
