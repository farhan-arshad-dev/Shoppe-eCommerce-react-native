import { addItem } from "@/src/redux/cart/cartSlice";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { makeStyles } from "@/src/theme/makeStyles";
import { ProductItem } from "@/src/types/product";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Animated, Dimensions, TouchableOpacity, } from "react-native";
import Purchases, { PurchasesPackage } from "react-native-purchases";
import { useDispatch } from "react-redux";

const { height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.5;

export default function ProductDetailsScreen() {

    const styles = useStyles();
    const commonStyles = useCommonStyles();

    const [packages, setPackages] = useState<PurchasesPackage[] | undefined>([]);

    const dispatch = useDispatch();

    const { productJson } = useLocalSearchParams();
    const product = JSON.parse(productJson as string) as ProductItem;

    const [productQty, setProductQty] = useState(1);

    const scrollY = useRef(new Animated.Value(0)).current;
    const blurValue = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 15],
        extrapolate: "clamp",
    });
    useEffect(() => {
        loadOfferings().then((packages) => {
            setPackages(packages);
            console.log("Products", JSON.stringify(packages, null, 2));

        });
    }, []);

    const translateY = scrollY.interpolate({
        inputRange: [0, height],
        outputRange: [0, -height],
        extrapolate: "clamp",
    });

    async function loadOfferings() {
        try {
            const offerings = await Purchases.getOfferings();

            if (offerings.current) {
                return offerings.current.availablePackages;
            }
        } catch (e) {
            console.log("Error loading offerings", e);
        }
    }

    async function purchasePackage(purchasesPackage: PurchasesPackage) {
        try {
            const { customerInfo } = await Purchases.purchasePackage(purchasesPackage);
            alert(`Product Pruchased of Price ${purchasesPackage.product.price}`,)
            console.log(JSON.stringify(customerInfo, null, 2));
        } catch (e) {
            console.log("Error purchasing", e);
        }
    }

    return (
        <View style={styles.container}>

            <Animated.Image
                source={{ uri: product.images[0] }}
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
                        source={{ uri: product.images[0] }}
                        style={styles.thumbnail}
                    />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.price}>{product.price}</Text>
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
                    <TouchableOpacity style={styles.qtyBtn} onPress={() => {
                        let tempProduct = 1
                        if (productQty - 1 > 0) {
                            tempProduct = productQty - 1
                        }
                        setProductQty(tempProduct);
                    }}>
                        <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyValue}>{productQty}</Text>

                    <TouchableOpacity style={styles.qtyBtn} onPress={() => {
                        let tempProduct = productQty + 1
                        if (productQty + 1 > product.count) {
                            tempProduct = product.count
                        }
                        setProductQty(tempProduct);
                    }}>
                        <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.description}>
                    {product.description}
                </Text>
            </Animated.ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.heartBtn}>
                    <Text style={{ fontSize: 24 }}>♡</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addToCartBtn} onPress={() => {
                    dispatch(addItem({
                        product: product,
                        quantity: productQty
                    }))
                }}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buyNowBtn} onPress={() => {
                    let productPackage = packages?.filter(item => item.identifier === product.productId)[0]
                    if (productPackage) {
                        purchasePackage(productPackage);
                    }
                }}>
                    <Text style={styles.btnTextWhite}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const useStyles = makeStyles((theme) => ({
    container: { flex: 1, backgroundColor: theme.colors.background },

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
        backgroundColor: theme.colors.background,
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
}))

