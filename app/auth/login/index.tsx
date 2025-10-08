import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationBackground from "@/assets/images/registration-background.png"
import { useRouter } from "expo-router";

export default function RegisterScreen() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <ImageBackground
                source={RegistrationBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <View style={styles.header}>
                    <Text> Login Header</Text>
                </View>

                <View style={styles.footer}>
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
        aspectRatio: 1.25,
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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#123456"
    },
    footer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#abcdef"
    },
});
