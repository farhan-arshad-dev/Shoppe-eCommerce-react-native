import { useRouter } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import PasswordBackground from "@/assets/images/password-background.png"
import ProfilePic from "@/assets/images/profile-dummy.png"
import { useCallback, useRef, useState } from "react";
import PasswordBullet from "@/src/components/PasswordBullet";
import { makeStyles } from "@/src/theme/makeStyles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import TertiaryButton from "@/src/components/TertiaryButton";
import LongArrowIcon from "@/src/components/LongArrowIcon";
import AvatarImage from "@/src/components/AvatarImage";
import { useTheme } from "@/src/providers/ThemeProvider";
import { useLoginData } from "@/src/providers/LoginDataProvider";
import { useAuth } from "@/src/hooks/useAuth";

export default function PasswordScreen() {

    const commonStyles = useCommonStyles();
    const styles = useStyles();
    const router = useRouter();
    const { theme } = useTheme();

    const { login, isLoggingIn } = useAuth();
    const { email, password, setPassword } = useLoginData();

    const [isWrongPassword, setIsWrongPassword] = useState(false);
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handlePasswordChange = useCallback((password: string) => {
        setIsWrongPassword(false);
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        // start a new timer (3 seconds after user stops typing)
        debounceTimer.current = setTimeout(async () => {
            try {
                await login({ email, password });
            } catch (_: any) {
                setIsWrongPassword(true);
            }
        }, 1500);
    }, [email, login]);

    return (
        <View style={commonStyles.container}>

            <ImageBackground
                source={PasswordBackground}
                style={commonStyles.backgroundContainer}
                resizeMode="cover" />

            <View style={[commonStyles.containerWithPadding, styles.foregroundContainer]}>
                <View style={[commonStyles.centerFull, styles.header]}>

                    <AvatarImage image={ProfilePic}
                        cardSize={theme.metrics.componentSizes.profilePicCard}
                        imageSize={theme.metrics.componentSizes.profilePic}
                        containerStyle={commonStyles.profileCard}
                    />

                    <Text style={styles.title}>Hello, Romina!!</Text>
                    <Text style={styles.description}>Type your password</Text>
                    <PasswordBullet
                        maxLength={8}
                        isWrongPassword={isWrongPassword}
                        setIsWrongPassword={setIsWrongPassword}
                        onPasswordChanged={handlePasswordChange}
                    />
                </View>

                <View style={commonStyles.fullFlex}>
                    {isWrongPassword && (<TertiaryButton text={"Forgot your password?"}
                        containerStyle={styles.forgotPasswordContainer} onPress={() => {
                            router.push("/auth/login/reset-password");
                        }} />)}
                    <View style={[commonStyles.fillParent, styles.notYouContainer]}>
                        <TertiaryButton
                            text={"Not you?"}
                            onPress={() => {
                                router.back();
                            }}>
                            <LongArrowIcon />
                        </TertiaryButton>
                    </View>
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
    title: {
        ...theme.typography.fontStyle.headlineLarge,
        marginBottom: theme.metrics.spacing.xxLarge,
    },
    description: {
        ...theme.typography.fontStyle.bodyXLarge,
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
        justifyContent: "flex-end"
    },
}));
