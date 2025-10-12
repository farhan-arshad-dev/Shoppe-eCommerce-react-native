import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ResetPasswordBackground from "@/assets/images/reset-password-background.png"
import ProfilePic from "@/assets/images/profile.png"
import { useState } from "react";
import VerificationOptions, { VerificationType } from "@/src/components/VerificationOpntions";
import PasswordBullet from "@/src/components/PasswordBullet";
import PrimaryButton from "@/src/components/PrimaryButton";
import SecondaryButton from "@/src/components/SecondaryButton";
import PrimaryInputText from "@/src/components/PrimaryInputText";
import PasswordResetErrorModal from "@/src/components/PasswordResetErrorModal";

enum ScreenType {
    VERIFICATION_CODE_TYPE_SELECTION,
    VERIFICATION_CODE_ENTRY,
    NEW_PASSWORD
};

export default function PasswordScreen() {
    const router = useRouter();

    const [screenType, setScreenType] = useState<ScreenType>(ScreenType.VERIFICATION_CODE_TYPE_SELECTION)
    const [verificationType, setVerificationType] = useState<VerificationType>(VerificationType.SMS)
    const [isVerificationErrorVisible, setIsVerificationErrorVisible] = useState<boolean>(false)

    const title =
        screenType === ScreenType.NEW_PASSWORD ?
            "Setup New Password" :
            "Password Recovery";

    const description = screenType === ScreenType.VERIFICATION_CODE_ENTRY ?
        "Enter 4-digits code we sent you \n on your phone number" :
        screenType === ScreenType.NEW_PASSWORD ?
            "Please, setup a new password for \n your account" :
            "How you would like to restore your password?";

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

                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>

                    {screenType === ScreenType.VERIFICATION_CODE_ENTRY && (
                        <Text style={styles.phoneNumberText}>+98*******00</Text>
                    )}
                </View>

                <View style={styles.footer}>

                    {screenType === ScreenType.VERIFICATION_CODE_TYPE_SELECTION &&
                        (<VerificationOptions verificationType={verificationType} setVerificationType={setVerificationType} />)}

                    {screenType === ScreenType.VERIFICATION_CODE_ENTRY &&
                        (<PasswordBullet
                            maxLength={4}
                            isWrongPassword={false}
                            style={{ marginTop: 24 }}
                            onPasswordChanged={(passowrd) => {
                                if (passowrd === "0000") {
                                    setScreenType(ScreenType.NEW_PASSWORD)
                                }
                            }}
                        />)}

                    {screenType === ScreenType.NEW_PASSWORD &&
                        (
                            <View style={styles.newPasswordContainer}>
                                <PrimaryInputText placeHolder={"New Password"} textStyle={styles.newPasswordInput} />
                                <PrimaryInputText placeHolder={"Repeat Password"} textStyle={styles.newPasswordInput} />
                            </View>
                        )}

                    <View style={styles.footerButtonSection}>
                        {screenType === ScreenType.VERIFICATION_CODE_TYPE_SELECTION &&
                            (<PrimaryButton text={"Next"} onPress={() => {
                                setScreenType(ScreenType.VERIFICATION_CODE_ENTRY)
                            }} />
                            )
                        }

                        {screenType === ScreenType.VERIFICATION_CODE_ENTRY &&
                            (<SecondaryButton text={"Send Again"} style={{ width: "55%" }} onPress={() => {
                                setIsVerificationErrorVisible(true);
                            }} />
                            )
                        }

                        {screenType === ScreenType.NEW_PASSWORD &&
                            (<PrimaryButton text={"Save"} onPress={() => {
                                router.replace("/home/whats-new");
                            }} />
                            )
                        }

                        <TouchableOpacity style={styles.cancelButton} onPress={() => { router.back() }}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <PasswordResetErrorModal visible={isVerificationErrorVisible} onClose={() => {
                setIsVerificationErrorVisible(false);
            }} />
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
        marginBottom: 18,
        textAlign: "center"
    },
    footer: {
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerButtonSection: {
        width: "100%",
        alignItems: "center",
    },
    cancelButton: {
        marginVertical: 28
    },
    cancelButtonText: {
        color: "#202020",
    },
    phoneNumberText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
    },
    newPasswordContainer: {
        width: "100%",
    },
    newPasswordInput: {
        textAlign: "center",
        borderRadius: 15,
    }
});