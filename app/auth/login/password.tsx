import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import PasswordBackground from "@/assets/images/password-background.png"
import ProfilePic from "@/assets/images/profile-dummy.png"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";
import PasswordBullet from "@/src/components/PasswordBullet";

export default function PasswordScreen() {
    const router = useRouter();
    const [isWrongPassword, setIsWrongPassword] = useState(false);

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
                    <PasswordBullet
                        maxLength={8}
                        isWrongPassword={isWrongPassword}
                        setIsWrongPassword={setIsWrongPassword}
                        onPasswordChanged={(passowrd) => {
                            if (passowrd === "00000000") {
                                router.replace("/shop")
                            } else if (passowrd === "11111111") {
                                router.replace("/shop/whats-new")
                            }
                        }}
                    />
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
        elevation: 4,   // background must set in the same scope
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
