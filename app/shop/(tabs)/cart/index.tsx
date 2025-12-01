import CartItem from "@/src/components/CartItem";
import LongArrowIcon from "@/src/components/LongArrowIcon";
import { useTheme } from "@/src/providers/ThemeProvider";
import { decreaseQty, increaseQty, removeItem, selectCartTotal } from "@/src/redux/cart/cartSlice";
import { RootState } from "@/src/redux/store/store";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { makeStyles } from "@/src/theme/makeStyles";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CartScreen() {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();
    const styles = useStyles()

    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const total = useSelector(selectCartTotal);

    return (
        <View style={[commonStyles.containerWithPadding]}>
            <View style={commonStyles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.title}>Cart</Text>
                    <View style={styles.itemCount}>
                        <Text style={theme.typography.fontStyle.headlineXSmall}>{items.length}</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.addressCard}>
                    <View style={styles.addressCardTextContainer}>
                        <Text style={styles.addressCardTitle}>Shipping Address</Text>
                        <Text style={styles.addressCardDescription}>26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city</Text>
                    </View>
                    <LongArrowIcon />
                </View>
                {items.map(item => (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        onIncrease={(id) => dispatch(increaseQty(id))}
                        onDecrease={(id) => dispatch(decreaseQty(id))}
                        onRemove={(id) => dispatch(removeItem(id))}
                    />
                ))}
            </ScrollView>

            <View style={styles.bottomBar}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>${total}</Text>
                </View>

                <View style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </View>
            </View>
        </View >
    )
}

const useStyles = makeStyles((theme) => ({
    title: {
        ...theme.typography.fontStyle.headlineLarge,
        marginRight: theme.metrics.spacing.small,
    },
    itemCount: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: theme.colors.primaryLight,
        justifyContent: "center",
        alignItems: "center",
    },
    addressCard: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: "space-between",
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    addressCardTextContainer: {
        width: "80%",
    },
    addressCardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#202020',
        marginBottom: 4,
    },
    addressCardDescription: {
        fontSize: 10,
        color: '#000000',
        lineHeight: 15,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        paddingBottom: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",

        // iOS shadow
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: -2 },

        // Android elevation
        elevation: 20,

        borderTopWidth: 1,
        borderTopColor: "#eee",
    },

    totalLabel: {
        fontSize: 20,
        fontWeight: "700",
    },

    totalValue: {
        fontSize: 18,
        fontWeight: "700",
        marginStart: 4,
    },

    checkoutButton: {
        backgroundColor: "#000",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },

    checkoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
}));
