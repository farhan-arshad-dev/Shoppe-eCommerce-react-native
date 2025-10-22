import { useEffect, useRef, useState } from "react";
import { StyleProp, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./styles";

export default function PasswordBullet({
    maxLength, isWrongPassword, setIsWrongPassword, style, onPasswordChanged,
}: {
    maxLength: number,
    isWrongPassword: boolean,
    setIsWrongPassword?: (isWrong: boolean) => void,
    style?: StyleProp<ViewStyle>,
    onPasswordChanged?: (password: string) => void,
}) {

    const [password, setPassword] = useState("");
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });

    const handlePasswordChange = (text: string) => {
        if (text.length <= maxLength) {
            setPassword(text);
            onPasswordChanged?.(text)
        }
        setIsWrongPassword?.(text === "00000"); // temp to mark the password wrong
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.focus()}
            style={[styles.passwordBulletContainer, style]}
        >
            <TextInput
                ref={inputRef}
                value={password}
                onChangeText={handlePasswordChange}
                keyboardType="numeric"
                secureTextEntry={false}
                style={styles.hiddenInput}
                maxLength={maxLength}
            />

            <View style={styles.bulletRow}>
                {[...Array(maxLength)].map((_, i) => {
                    const filled = i < password.length;
                    return (<View
                        key={i}
                        style={[styles.bullet,
                        isWrongPassword ?
                            (filled ? styles.wrongPasswordBullet : styles.wrongPasswordEmptyBullet) :
                            (filled ? styles.filledBullet : styles.emptyBullet)
                        ]}
                    />
                    );
                })}
            </View>
        </TouchableOpacity>
    );
}
