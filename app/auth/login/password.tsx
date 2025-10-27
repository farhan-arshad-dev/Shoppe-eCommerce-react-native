import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import PasswordBackground from "@/assets/images/password-background.png"
import ProfilePic from "@/assets/images/profile-dummy.png"
import { useState } from "react";
import PasswordBullet from "@/src/components/PasswordBullet";
import { makeStyles } from "@/src/theme/makeStyles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import TertiaryButton from "@/src/components/TertiaryButton";
import LongArrowIcon from "@/src/components/LongArrowIcon";

export default function PasswordScreen() {

    const commonStyles = useCommonStyles();
    const styles = useStyles();
    const router = useRouter();

    const [isWrongPassword, setIsWrongPassword] = useState(false);

    return (
        <View style={commonStyles.container}>

            <ImageBackground
                source={PasswordBackground}
                style={commonStyles.backgroundContainer}
                resizeMode="cover" />

            <View style={[commonStyles.screenContainer, styles.foregroundContainer]}>
                <View style={[commonStyles.centerFull, styles.header]}>

                    <View style={[commonStyles.centerContent, styles.profileCard]}>
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
                                router.replace("/shop/(tabs)/home")
                            } else if (passowrd === "11111111") {
                                router.replace("/shop/whats-new")
                            }
                        }}
                    />
                </View>

                <View style={commonStyles.fullFlex}>
                    {isWrongPassword && (<TertiaryButton text={"Forgot your password?"}
                        containerStyle={styles.forgotPasswordContainer} onPress={() => {
                            router.push("/auth/login/reset-password");
                        }} />)}
                    <TertiaryButton
                        text={"Not you?"}
                        onPress={() => {
                            router.back();
                        }}
                        containerStyle={styles.notYouContainer}>
                        <LongArrowIcon />
                    </TertiaryButton>
                </View>
            </View>
        </View >
    );
}

const useStyles = makeStyles((theme) => ({
    foregroundContainer: {
        backgroundColor: "transparent",
    },
    header: {
        justifyContent: "flex-end",
    },
    profileCard: {
        ...theme.shadows.medium,
        width: theme.metrics.iconSize.profilePicCard,
        height: theme.metrics.iconSize.profilePicCard,
        borderRadius: theme.metrics.iconSize.profilePicCard / 2,
        marginBottom: 28,
    },
    profilePic: {
        width: theme.metrics.iconSize.profilePic,
        height: theme.metrics.iconSize.profilePic,
    },
    title: {
        ...theme.typography.fontStyle.headlineLarge,
        marginBottom: theme.metrics.spacing.xxLarge,
    },
    description: {
        ...theme.typography.fontStyle.headlineSmall,
        marginBottom: theme.metrics.spacing.xSmall,
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginVertical: theme.metrics.spacing.xxxLarge,
    },
    notYouContainer: {
        flex: 1,
        marginVertical: theme.metrics.spacing.xLarge,
    },
}));
