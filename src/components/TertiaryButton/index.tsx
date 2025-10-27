import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { useStyle } from "./style";
import React from "react";

export default function TertiaryButton({
    text,
    onPress,
    containerStyle,
    textStyle,
    children,
}: {
    text: string,
    onPress?: () => void,
    containerStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    children?: React.ReactNode,
}) {
    const style = useStyle();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style.tertiaryButtonContainer, containerStyle]}
            activeOpacity={0.7}>

            <Text style={[style.tertiaryButtonText, textStyle]}>{text}</Text>

            {children}

        </TouchableOpacity>
    );
}
