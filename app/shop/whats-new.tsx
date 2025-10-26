import { ImageBackground, StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import WhatsNewBackground from "@/assets/images/whats-new-background.png"
import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";
import { slides } from "@/src/data/slides";
import { useRouter } from "expo-router";

export default function WhatsNewScreen() {

    const router = useRouter();
    const pagerRef = useRef<PagerView>(null);
    const [page, setPage] = useState(0);

    const handleLetsStart = () => {
        router.replace("/shop/home");
    };

    return (
        <View style={styles.container}>

            <ImageBackground
                source={WhatsNewBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    onPageSelected={(e) => setPage(e.nativeEvent.position)}
                    ref={pagerRef}>
                    {slides.map((slide) => (
                        <View key={slide.id} style={styles.slideContainer}>
                            <View style={styles.slide}>
                                <Image source={slide.image} style={styles.image} resizeMode="stretch" />
                                <Text style={styles.title}>{slide.title}</Text>
                                <Text style={styles.description}>{slide.description}</Text>
                                {page === slides.length - 1 && (<TouchableOpacity onPress={handleLetsStart} style={styles.nextButton}>
                                    <Text style={styles.nextButtonText}>
                                        Let&apos;s Start
                                    </Text>
                                </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    ))}
                </PagerView>

                {/* Pagination Dots */}
                <View style={styles.pagination}>
                    {slides.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                { backgroundColor: i === page ? "#004CFF" : "#C7D6FB" },
                            ]}
                        />
                    ))}
                </View>
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
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    foregroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24
    },
    pagerView: {
        flex: 1,
        width: "100%",
        marginTop: 82,
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
    },
    slide: {
        width: "90%",
        height: "85%",
        borderRadius: 30, // Half of the width/height
        alignItems: "center",
        backgroundColor: "#ffffff",

        // iOS Shadow
        shadowColor: '#707070',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,   // background must set in the same scope
    },
    image: {
        width: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 36,
        color: "#202020",
        textAlign: "center",
        marginTop: 40,
    },
    description: {
        fontSize: 19,
        color: "#000000",
        textAlign: "center",
        marginTop: 12,
        marginHorizontal: 42,
        lineHeight: 27,
        fontWeight: "light",
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    nextButton: {
        backgroundColor: "#004CFF",
        borderRadius: 16,
        alignItems: "center",
        margin: 32,
    },
    nextButtonText: {
        color: "#F3F3F3",
        fontSize: 22,
        fontWeight: "light",
        marginVertical: 10,
        marginHorizontal: 48
    },
});
