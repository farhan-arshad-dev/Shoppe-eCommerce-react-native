import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResetPasswordBackground from "@/assets/images/reset-password-background.png"
import ProfilePic from "@/assets/images/profile.png"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";

enum VerificationType {
    SMS,
    EMAIL,
}

export default function PasswordScreen() {
    const router = useRouter();
    const [verificationType, setVerificationType] = useState<VerificationType>(VerificationType.SMS)
    const isSMSVerification = verificationType === VerificationType.SMS;
    return (
        <View style={styles.container}>

            <ImageBackground
                source={ResetPasswordBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <View style={styles.header}>

                    <View style={styles.profileCard}>
                        <Image source={ProfilePic} style={styles.profilePic} />
                    </View>

                    <Text style={styles.title}>Password Recovery</Text>
                    <Text style={styles.description}>How you would like to restore{"\n"}your password?</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.verificationOptions}>
                        <TouchableOpacity activeOpacity={1} style={styles.smsButton} onPress={() => {
                            setVerificationType(VerificationType.SMS)
                        }}>
                            <Text style={styles.smsButtonText}>SMS</Text>

                            <View style={[styles.bullet, (isSMSVerification ? styles.smsBulletActive : styles.smsBulletInActive)]} >
                                {verificationType === VerificationType.SMS && (
                                    <MaterialCommunityIcons name="check-bold" size={14} color="white" />
                                )}
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={styles.emailButton} onPress={() => {
                            setVerificationType(VerificationType.EMAIL)
                        }}>
                            <Text style={styles.emailButtonText}>Email</Text>
                            <View style={[styles.bullet, (isSMSVerification ? styles.emailBulletInActive : styles.emailBulletActive)]} >
                                {verificationType === VerificationType.EMAIL && (
                                    <MaterialCommunityIcons name="check-bold" size={14} color="white" />
                                )}
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.nextButtonSection}>
                        <TouchableOpacity style={styles.nextButton} onPress={() => {
                        }}>
                            <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => { router.back() }}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
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
        aspectRatio: 1.35,
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
        marginBottom: 12,
    },
    profilePic: {
        width: 91,
        height: 91,
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#202020",
        lineHeight: 30,
        marginBottom: 6,
    },
    description: {
        fontSize: 19,
        fontWeight: "light",
        lineHeight: 27,
        marginBottom: 28,
        textAlign: "center"
    },
    verificationOptions: {
        width: "100%",
        alignItems: "center"
    },
    smsButton: {
        flexDirection: "row",
        justifyContent: "center",
        width: "55%",
        backgroundColor: "#E5EBFC",
        borderRadius: 16,
    },
    smsButtonText: {
        flex: 1,
        color: "#004CFF",
        textAlign: "center",
        lineHeight: 19,
        margin: 10,
        fontWeight: "bold",
    },
    emailButton: {
        width: "55%",
        backgroundColor: "#FFEBEB",
        borderRadius: 16,
        marginTop: 10,
    },
    emailButtonText: {
        color: "#000000",
        textAlign: "center",
        lineHeight: 19,
        margin: 10,
        fontWeight: "medium",
    },
    bullet: {
        position: "absolute",
        width: 22,
        height: 22,
        borderRadius: 11,
        borderColor: "#ffffff",
        borderWidth: 2,
        right: 6,
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    smsBulletActive: {
        backgroundColor: "#004CFF",
    },
    smsBulletInActive: {
        backgroundColor: "#E5EBFC",
    },
    emailBulletActive: {
        backgroundColor: "#EC4E4E",
    },
    emailBulletInActive: {
        backgroundColor: "#F8CECE",
    },
    footer: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nextButtonSection: {
        width: "100%",
        alignItems: "center",
    },
    nextButton: {
        width: "100%",
        marginHorizontal: 24,
        backgroundColor: "#004CFF",
        borderRadius: 16,
    },
    nextButtonText: {
        color: "#F3F3F3",
        margin: 16,
        fontFamily: "Nunito Sans",
        fontSize: 22,
        fontWeight: "300",
        textAlign: "center",
    },
    cancelButton: {
        marginVertical: 28
    },
    cancelButtonText: {
        color: "#202020",
    },
});