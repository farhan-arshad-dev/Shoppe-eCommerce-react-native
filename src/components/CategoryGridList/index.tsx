import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ProductItem } from "@/src/types/product";

export default function CategoryGridList(
    { categories }: { categories: ProductItem[] }
) {
    return (
        <View style={styles.gridContainer}>
            {categories.map((item) => (
                <TouchableOpacity key={item.id} style={styles.card}>
                    <View style={styles.imageGrid}>
                        {item.images.map((img, id) => (
                            <Image
                                key={id}
                                source={{ uri: img }}
                                style={styles.image}
                                resizeMode="cover" />
                        ))}
                    </View>
                    <View style={styles.cardTitle}>
                        <Text style={styles.name}>{item.title}</Text>
                        <Text style={styles.count}>{item.count}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
