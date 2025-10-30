import { ImageBackground, View, Image, Text } from "react-native";
import WhatsNewBackground from "@/assets/images/whats-new-background.png"
import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";
import { slides } from "@/src/data/slides";
import { useRouter } from "expo-router";
import { makeStyles } from "@/src/theme/makeStyles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import PageDotIndicator from "@/src/components/PageDotIndicator";
import PrimaryButton from "@/src/components/PrimaryButton";

export default function WhatsNewScreen() {

    const commonStyles = useCommonStyles();
    const styles = useStyles();

    const router = useRouter();
    const pagerRef = useRef<PagerView>(null);
    const [page, setPage] = useState(0);

    const handleLetsStart = () => {
        router.replace("/shop/home");
    };

    return (
        <View style={commonStyles.container}>
            <ImageBackground
                source={WhatsNewBackground}
                style={[
                    commonStyles.backgroundContainer,
                    commonStyles.fillParent
                ]}
                resizeMode="cover" />

            <View style={[commonStyles.containerWithPadding, styles.foregroundContainer]}>
                <PagerView
                    style={[commonStyles.fullWidth, styles.pagerView]}
                    initialPage={0}
                    onPageSelected={(e) => setPage(e.nativeEvent.position)}
                    ref={pagerRef}>
                    {slides.map((slide) => (
                        <View key={slide.id}
                            style={[styles.slideContainer]}>
                            <View style={styles.slide}>
                                <Image source={slide.image} resizeMode="stretch" />
                                <Text style={styles.title}>{slide.title}</Text>
                                <Text style={styles.description}>{slide.description}</Text>
                                {page === slides.length - 1 &&
                                    (<View>
                                        <PrimaryButton
                                            text={"Let's Start"}
                                            containerStyle={[commonStyles.slimButton, styles.nextButton]}
                                            onPress={handleLetsStart} />
                                    </View>
                                    )}
                            </View>
                        </View>
                    ))}
                </PagerView>
                <PageDotIndicator count={slides.length} activeIndex={page} />

            </View>
        </View >
    )
}

const useStyles = makeStyles((theme) => ({
    foregroundContainer: {
        backgroundColor: "transparent",
        justifyContent: "flex-start"
    },
    pagerView: {
        height: "75%",
        marginTop: theme.metrics.spacing.xxHuge + theme.metrics.spacing.mediumLarge,
    },
    slideContainer: {
        alignItems: "center",
    },
    slide: {
        ...theme.shadows.medium,
        width: "92%",
        height: "97.5%",
        borderRadius: theme.metrics.borderRadius.xxxLarge,
        alignItems: "center",
    },
    title: {
        ...theme.typography.fontStyle.headlineLarge,
        color: theme.colors.primaryText,
        textAlign: "center",
        marginTop: theme.metrics.spacing.xxxLarge,
    },
    description: {
        ...theme.typography.fontStyle.bodyXLarge,
        textAlign: "center",
        marginVertical: theme.metrics.spacing.small,
        lineHeight: theme.typography.lineHeight.xLarge,
        marginHorizontal: theme.metrics.spacing.xxxLarge,
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: theme.metrics.spacing.large,
    },
    nextButton: {
        margin: theme.metrics.spacing.xxLarge,
    },
}));
