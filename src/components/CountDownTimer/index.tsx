import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleProp, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import ClockIcon from "@/assets/images/clock-icon.png"

export default function Timer({
    hours,
    minutes,
    seconds,
    live = true,
    containerStyle,
    cardStyle,
    labelStyle,
    valueStyle,
    onComplete,
}: {
    hours: number;
    minutes: number;
    seconds: number;
    live?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    cardStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    valueStyle?: StyleProp<TextStyle>;
    onComplete?: () => void;
}) {
    const [totalSeconds, setTotalSeconds] = useState(hours * 3600 + minutes * 60 + seconds);

    // 🧠 Start countdown logic
    useEffect(() => {
        if (!live || totalSeconds <= 0) return;

        const interval = setInterval(() => {
            setTotalSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    onComplete?.();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [live, totalSeconds]);

    // ⏳ Derived values
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return (
        <View style={[styles.container, containerStyle]} >
            < View style={styles.iconContainer} >
                <Image
                    source={ClockIcon}
                    style={styles.clockIcon}
                />
            </View>

            <View style={styles.timeContainer}>
                <TimeCard value={hrs} cardStyle={cardStyle} labelStyle={labelStyle} valueStyle={valueStyle} />
                <TimeCard value={mins} cardStyle={cardStyle} labelStyle={labelStyle} valueStyle={valueStyle} />
                <TimeCard value={secs} cardStyle={cardStyle} labelStyle={labelStyle} valueStyle={valueStyle} />
            </View>
        </View>
    );
};

function TimeCard({
    value, cardStyle, valueStyle
}: {
    value: number,
    cardStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    valueStyle?: StyleProp<TextStyle>;
}) {
    return (
        <View style={[styles.card, cardStyle]} >
            <Text style={[styles.value, valueStyle]}> {String(value).padStart(2, "0")} </Text>
        </View>
    );
};
