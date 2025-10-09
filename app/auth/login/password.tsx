import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import PasswordBackground from "@/assets/images/password-background.png"
import ProfilePic from "@/assets/images/profile.png"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useEffect, useRef, useState } from "react";

export default function PasswordScreen() {

    const maxLength = 8;
    const router = useRouter();
    const [password, setPassword] = useState("");
    const inputRef = useRef<TextInput>(null);
    const [isWrongPassword, setIsWrongPassword] = useState(false);
    const handlePasswordChange = (text: string) => {
        if (text.length <= maxLength) {
            setPassword(text);
        }
        setIsWrongPassword(text === "00000"); // temp to mark the password wrong
    };

    useEffect(() => {
        inputRef.current?.focus();
    });

    return (
        <View style={styles.container}>

            <ImageBackground
                source={PasswordBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <View style={styles.header}>

                    <View style={styles.profileCard}>
                        <Image source={ProfilePic} style={styles.profilePic} />
                    </View>

                    <Text style={styles.title}>Hello, Romina!!</Text>
                    <Text style={styles.description}>Type your password</Text>


                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => inputRef.current?.focus()}
                        style={styles.passwordBulletContainer}
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
                </View>

                <View style={styles.footer}>
                    {isWrongPassword && (<TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => {
                        router.push("/auth/login/reset-password");
                    }}>
                        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                    </TouchableOpacity>
                    )}

                    <TouchableOpacity style={styles.notYouContainer} onPress={() => {
                        router.back();
                    }}>
                        <Text style={styles.notYouText}>Not you?</Text>
                        <View style={styles.notYouArrowIcon}>
                            <FontAwesome6 name="arrow-right-long" size={14} color="#ffffff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    backgroundContainer: {
        position: "absolute",
        width: "100%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    foregroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
    },
    profileCard: {
        backgroundColor: "#ffffff",

        width: 105,
        height: 105,
        borderRadius: 67, // Half of the width/height
        justifyContent: 'center',
        alignItems: 'center',

        // iOS Shadow
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.16,
        shadowRadius: 4,

        // Android Shadow
        elevation: 4,
        marginBottom: 28,
    },
    profilePic: {
        width: 91,
        height: 91,
    },
    title: {
        marginBottom: 34,
        fontSize: 28,
        fontWeight: "bold",
        color: "#202020",
        lineHeight: 36
    },
    description: {
        fontSize: 19,
        fontWeight: "light",
        lineHeight: 35,
        marginBottom: 8,
    },
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
    footer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginVertical: 40,
    },
    forgotPasswordText: {
        color: "#202020",
        opacity: 0.9,
        marginBottom: 4,
    },
    notYouContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginVertical: 24,
    },
    notYouText: {
        color: "#202020",
        opacity: 0.9,
        marginBottom: 4,
    },
    notYouArrowIcon: {
        height: 30,
        width: 30,
        marginHorizontal: 16,
        backgroundColor: "#004CFF",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    }
});
