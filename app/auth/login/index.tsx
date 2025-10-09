import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginBackground from "@/assets/images/login-background.png"
import { useRouter } from "expo-router";
import Fontisto from '@expo/vector-icons/Fontisto';
import PrimaryButton from "@/components/PrimaryButton";

export default function RegisterScreen() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <ImageBackground
                source={LoginBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <View style={styles.header} />

                <View style={styles.footer}>
                    <View>
                        <Text style={styles.title}>Login</Text>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Good to see you back!</Text>
                            <Fontisto name="heart" size={16} color="black" />
                        </View>
                        <TextInput
                            style={styles.emailInput}
                            placeholder="Email"
                            placeholderTextColor="#D2D2D2"
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />
                    </View>

                    <View style={styles.buttonSection}>
                        <PrimaryButton text={"Next"} onPress={() => {
                            router.push("/auth/login/password")
                        }} />
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
        height: "100%",
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
    },
    footer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
    },
    title: {
        marginTop: 32,
        fontSize: 52,
        fontWeight: "bold",
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    description: {
        fontSize: 19,
        fontWeight: "light",
        color: "#202020",
        lineHeight: 35,
        marginEnd: 12,
    },
    emailInput: {
        width: "100%",
        backgroundColor: "#F8F8F8",
        fontSize: 14,
        padding: 16,
        borderRadius: 60,
        marginTop: 12,
    },
    buttonSection: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    cancelButton: {
        marginVertical: 28
    },
    cancelButtonText: {
        color: "#202020",
    },
});
