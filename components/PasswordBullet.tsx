import { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";

export default function PasswordBullet({
    maxLength, isWrongPassword, setIsWrongPassword, style, onPasswordChanged,
}: {
    maxLength: number,
    isWrongPassword: boolean,
    setIsWrongPassword?: (isWrong: boolean) => void,
    style?: ViewStyle,
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

const styles = StyleSheet.create({
    passwordBulletContainer: {
        height: 18,
        width: "100%",
    },
    hiddenInput: {
        position: "absolute",
        opacity: 0,
    },
    bulletRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
    bullet: {
        width: 17,
        height: 17,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    filledBullet: {
        backgroundColor: "#004CFF",
        borderColor: "#004CFF",
    },
    emptyBullet: {
        borderColor: "#E5EBFC",
        backgroundColor: "#E5EBFC",
    },
    wrongPasswordBullet: {
        backgroundColor: "#EC4E4E",
        borderColor: "#EC4E4E",
    },
    wrongPasswordEmptyBullet: {
        backgroundColor: "#F8CECE",
        borderColor: "#F8CECE",
    },
})
