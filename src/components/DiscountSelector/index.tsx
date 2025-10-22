import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const discounts = ["All", "10%", "20%", "30%", "40%", "50%"];

export default function DiscountSelector() {
    const [selected, setSelected] = useState("All");

    return (
        <View style={styles.container}>
            {discounts.map((item) => {
                const isSelected = selected === item;
                return (
                    <Pressable
                        key={item}
                        onPress={() => setSelected(item)}
                        style={[
                            styles.item,
                            isSelected && styles.selectedItem,
                        ]}>
                        <Text style={[styles.text, isSelected && styles.selectedText]}>
                            {item}
                        </Text>
                        {isSelected && <View style={styles.triangleDown} />}
                    </Pressable>
                );
            })}
        </View>
    );
}
