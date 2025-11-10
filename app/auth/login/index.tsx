import { ImageBackground, Text, TextInput, View } from "react-native";
import LoginBackground from "@/assets/images/login-background.png"
import { useRouter } from "expo-router";
import Fontisto from '@expo/vector-icons/Fontisto';
import PrimaryButton from "@/src/components/PrimaryButton";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { makeStyles } from "@/src/theme/makeStyles";
import TertiaryButton from "@/src/components/TertiaryButton";
import { useLoginData } from "@/src/providers/LoginDataProvider";

export default function RegisterScreen() {

    const commonStyles = useCommonStyles();
    const styles = useStyle();
    const router = useRouter();

    const { email, setEmail } = useLoginData();

    const onEmailChange = (email: string) => {
        setEmail(email)
    }

    return (
        <View style={commonStyles.container}>

            <ImageBackground
                source={LoginBackground}
                style={[
                    commonStyles.backgroundContainer,
                    commonStyles.centerFull,
                ]}
                resizeMode="cover" />

            <View style={[
                commonStyles.containerWithPadding,
                commonStyles.centerContent,
                styles.foregroundContainer,
            ]}>
                {/* top half space */}
                <View style={commonStyles.fullFlex} />

                <View style={commonStyles.fullFlex}>
                    <View>
                        <Text style={styles.title}>Login</Text>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Good to see you back!</Text>
                            <Fontisto name="heart" size={16} color="black" />
                        </View>
                        <TextInput
                            style={commonStyles.authInputContainer}
                            placeholder="Email"
                            placeholderTextColor="#D2D2D2"
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={onEmailChange}
                        >{email}</TextInput>
                    </View>

                    <View style={styles.buttonSection}>

                        <PrimaryButton
                            text={"Next"}
                            containerStyle={commonStyles.fullWidth}
                            onPress={() => {
                                router.push("/auth/login/password")
                            }} />

                        <TertiaryButton
                            text={"Cancel"}
                            onPress={() => { router.back() }}
                            containerStyle={styles.cancelButton} />
                    </View>
                </View>
            </View>

        </View >
    );
}

const useStyle = makeStyles((theme) => ({
    foregroundContainer: {
        flex: 1,
        backgroundColor: "transparent",
    },
    title: {
        ...theme.typography.fontStyle.hero,
        marginTop: theme.metrics.spacing.xLarge,
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: theme.metrics.spacing.small,
    },
    description: {
        ...theme.typography.fontStyle.bodyXLarge,
        marginEnd: theme.metrics.spacing.small,
    },
    buttonSection: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    cancelButton: {
        marginVertical: theme.metrics.spacing.xLarge,
    }
}));
