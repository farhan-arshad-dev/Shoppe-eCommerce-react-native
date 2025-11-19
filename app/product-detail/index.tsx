import { useLocalSearchParams } from "expo-router";
import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, Animated, Dimensions, TouchableOpacity, } from "react-native";

const { height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.5;

export default function ProductDetailsScreen() {
    const { productId } = useLocalSearchParams();
    const scrollY = useRef(new Animated.Value(0)).current;

    const blurValue = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 15],
        extrapolate: "clamp",
    });

    const translateY = scrollY.interpolate({
        inputRange: [0, height],
        outputRange: [0, -height],
        extrapolate: "clamp",
    });

    return (
        <View style={styles.container}>

            <Animated.Image
                source={{ uri: "https://picsum.photos/800" }}
                style={[styles.mainImage]}
                blurRadius={blurValue}
            />
            <Animated.ScrollView
                style={[
                    styles.overlay,
                    { transform: [{ translateY }] }
                ]}
                contentContainerStyle={{ paddingBottom: 120 }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}>
                <View style={styles.headerRow}>
                    <Image
                        source={{ uri: "https://picsum.photos/200" }}
                        style={styles.thumbnail}
                    />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.price}>$129.99</Text>
                        <Text style={styles.selected}>
                            Color: Black • Size: M
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Colors</Text>
                <View style={styles.row}>
                    {["black", "red", "blue"].map((color) => (
                        <View
                            key={color}
                            style={[styles.colorDot, { backgroundColor: color }]}
                        />
                    ))}
                </View>
                <Text style={styles.sectionTitle}>Size</Text>
                <View style={styles.row}>
                    {["S", "M", "L", "XL"].map((size) => (
                        <TouchableOpacity key={size} style={styles.sizeBox}>
                            <Text style={styles.sizeText}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Quantity</Text>
                <View style={styles.qtyRow}>
                    <TouchableOpacity style={styles.qtyBtn}>
                        <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyValue}>1</Text>

                    <TouchableOpacity style={styles.qtyBtn}>
                        <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                    lobortis risus. Donec euismod, nisi vel consectetur interdum, nisl
                    ligula bibendum lorem, vel cursus arcu massa nec sapien. Aliquam erat
                    volutpat. Integer ut orci nec justo vulputate vulputate sit amet non
                    justo. Curabitur at lacus id eros interdum fermentum.
                </Text>
            </Animated.ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.heartBtn}>
                    <Text style={{ fontSize: 24 }}>♡</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addToCartBtn}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buyNowBtn}>
                    <Text style={styles.btnTextWhite}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    // Top large product image
    mainImage: {
        width: "100%",
        height: IMAGE_HEIGHT,
        position: "absolute",
        top: 0,
        left: 0,
    },

    // Overlay sheet
    overlay: {
        flex: 1,
        marginTop: IMAGE_HEIGHT - 60,
        backgroundColor: "#fff",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        padding: 20,
    },

    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    thumbnail: {
        width: 70,
        height: 70,
        borderRadius: 12,
    },

    price: {
        fontSize: 22,
        fontWeight: "700",
    },

    selected: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    colorDot: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },

    sizeBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginRight: 10,
    },

    sizeText: { fontSize: 15 },

    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },

    qtyBtn: {
        width: 38,
        height: 38,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#aaa",
    },

    qtyBtnText: {
        fontSize: 20,
        fontWeight: "600",
    },

    qtyValue: {
        fontSize: 20,
        marginHorizontal: 15,
        fontWeight: "600",
    },

    description: {
        marginTop: 20,
        lineHeight: 22,
        color: "#444",
    },

    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#eee",
    },

    heartBtn: {
        padding: 14,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        marginRight: 10,
    },

    addToCartBtn: {
        flex: 1,
        backgroundColor: "#222",
        paddingVertical: 14,
        borderRadius: 12,
        marginRight: 10,
        alignItems: "center",
    },

    buyNowBtn: {
        flex: 1,
        backgroundColor: "#ff6b00",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },

    btnTextWhite: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
});

