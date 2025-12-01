import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useStyles } from "./cart-item.styles";
import type { CartItem as CartItemType } from "@/src/types/cartTypes";

type Props = {
    item: CartItemType;
    onIncrease?: (id: number) => void;
    onDecrease?: (id: number) => void;
    onRemove?: (id: number) => void;
};

export default function CartItem({ item, onIncrease, onDecrease, onRemove }: Props) {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.product.images[0] }} style={styles.image} />

                <Pressable
                    onPress={() => onRemove?.(item.product.id)}
                    style={styles.deleteButton}
                >
                    <Text style={styles.deleteText}>×</Text>
                </Pressable>
            </View>

            <View style={styles.right}>
                <Text style={styles.title} numberOfLines={2}>
                    {item.product.title}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.meta}>Color: Pink</Text>
                    <Text style={styles.meta}>Size: M</Text>
                </View>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                    <Text style={styles.price}>{item.product.price}</Text>

                    <View style={styles.qtyRow}>
                        <Pressable
                            style={styles.qtyButton}
                            onPress={() => onDecrease?.(item.product.id)}
                        >
                            <Text style={styles.qtyText}>−</Text>
                        </Pressable>

                        <Text style={styles.qtyNumber}>{item.quantity}</Text>

                        <Pressable
                            style={styles.qtyButton}
                            onPress={() => onIncrease?.(item.product.id)}
                        >
                            <Text style={styles.qtyText}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}
