import { useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import ResetPasswordBackground from "@/assets/images/reset-password-background.png"
import ProfilePic from "@/assets/images/profile-dummy.png"
import { useState } from "react";
import VerificationOptions, { VerificationType } from "@/src/components/VerificationOpntions";
import PasswordBullet from "@/src/components/PasswordBullet";
import PrimaryButton from "@/src/components/PrimaryButton";
import SecondaryButton from "@/src/components/SecondaryButton";
import PrimaryInputText from "@/src/components/PrimaryInputText";
import PasswordResetErrorModal from "@/src/components/PasswordResetErrorModal";
import { useCommonStyles } from "@/src/styles/commonStyles";
import AvatarImage from "@/src/components/AvatarImage";
import { theme } from "@/src/theme";
import { makeStyles } from "@/src/theme/makeStyles";
import TertiaryButton from "@/src/components/TertiaryButton";

enum ScreenType {
    VERIFICATION_CODE_TYPE_SELECTION,
    VERIFICATION_CODE_ENTRY,
    NEW_PASSWORD
};

export default function PasswordScreen() {

    const commonStyles = useCommonStyles();
    const styles = useStyles();
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
        <View style={commonStyles.container}>

            <ImageBackground
                source={ResetPasswordBackground}
                style={[commonStyles.backgroundContainer, styles.backgroundContainer]}
                resizeMode="cover" />

            <View style={[
                commonStyles.screenContainer,
                commonStyles.centerContent,
                styles.foregroundContainer
            ]}>
                <View style={[
                    commonStyles.fullFlex,
                    commonStyles.centerContent,
                    styles.header
                ]}>
                    <AvatarImage image={ProfilePic}
                        cardSize={theme.metrics.iconSize.profilePicCard}
                        imageSize={theme.metrics.iconSize.profilePic}
                        containerStyle={commonStyles.profileCard}
                    />

                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>

                    {screenType === ScreenType.VERIFICATION_CODE_ENTRY && (
                        <Text style={styles.phoneNumberText}>+98*******00</Text>
                    )}
                </View>

                <View style={[
                    commonStyles.fullFlex,
                    commonStyles.centerContent,
                    styles.footer
                ]}>
                    {screenType === ScreenType.VERIFICATION_CODE_TYPE_SELECTION &&
                        (<VerificationOptions verificationType={verificationType} setVerificationType={setVerificationType} />)}

                    {screenType === ScreenType.VERIFICATION_CODE_ENTRY &&
                        (<PasswordBullet
                            maxLength={4}
                            isWrongPassword={false}
                            style={{ marginTop: theme.metrics.spacing.xLarge }}
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
                            (<PrimaryButton
                                text={"Next"}
                                onPress={() => { setScreenType(ScreenType.VERIFICATION_CODE_ENTRY) }}
                                containerStyle={commonStyles.fullWidth}
                            />)
                        }

                        {screenType === ScreenType.VERIFICATION_CODE_ENTRY &&
                            (<SecondaryButton text={"Send Again"} style={{ width: "55%" }} onPress={() => {
                                setIsVerificationErrorVisible(true);
                            }} />
                            )
                        }

                        {screenType === ScreenType.NEW_PASSWORD &&
                            (<PrimaryButton
                                text={"Save"}
                                onPress={() => { router.replace("/shop/whats-new"); }}
                                containerStyle={commonStyles.fullWidth}
                            />
                            )}
                        <TertiaryButton
                            text={"Cancel"}
                            onPress={() => { router.back() }}
                            containerStyle={styles.cancelButtonContainer}
                        />
                    </View>
                </View>
            </View>

            <PasswordResetErrorModal visible={isVerificationErrorVisible} onClose={() => {
                setIsVerificationErrorVisible(false);
            }} />
        </View >
    );
}

const useStyles = makeStyles((theme) => ({
    backgroundContainer: {
        aspectRatio: 1.35,
    },
    foregroundContainer: {
        backgroundColor: "transparent",
    },
    header: {
        justifyContent: "flex-end",
    },
    title: {
        ...theme.typography.fontStyle.headlineMedium,
        color: theme.colors.primaryText,
        marginBottom: theme.metrics.spacing.xSmall,
    },
    description: {
        ...theme.typography.fontStyle.bodyXLarge,
        lineHeight: theme.typography.lineHeight.xLarge,
        marginBottom: theme.metrics.spacing.mediumLarge,
        textAlign: "center"
    },
    footer: {
        justifyContent: "space-between",
    },
    footerButtonSection: {
        width: "100%",
        alignItems: "center",
    },
    cancelButtonContainer: {
        marginVertical: theme.metrics.spacing.xxLarge
    },
    phoneNumberText: {
        ...theme.typography.fontStyle.headlineXSmall,
        color: theme.colors.primaryText,
    },
    newPasswordContainer: {
        width: "100%",
    },
    newPasswordInput: {
        textAlign: "center",
        marginVertical: theme.metrics.spacing.xxSmall,
        borderRadius: theme.metrics.borderRadius.large,
    }
}));