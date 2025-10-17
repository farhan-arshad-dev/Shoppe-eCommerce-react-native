import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Category } from "@/src/types/shop";

export default function CategoryGrid(
    { categories }: { categories: Category[] }
) {
    return (
        <View style={styles.gridContainer}>
            {categories.map((item) => (
                <View key={item.id} style={styles.card}>
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
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.count}>{item.count}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}
