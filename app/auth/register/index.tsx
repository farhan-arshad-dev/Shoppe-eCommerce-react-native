import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import RegistrationBackground from "@/assets/images/registration-background.png"
import UpLoadPhotoImage from "@/assets/images/upload-photo.png"
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'
import { useRouter } from "expo-router";

export default function RegisterScreen() {

    const router = useRouter();

    const [secure, setSecure] = useState(true);
    const [countryCode, setCountryCode] = useState<CountryCode>("GB");
    const [phone, setPhone] = useState("");
    const [countryPickerVisible, setCountryPickerVisible] = useState(false);

    const onCountrySelect = (country: Country) => {
        setCountryCode(country.cca2);
    };

    return (
        <View style={styles.container}>

            <ImageBackground
                source={RegistrationBackground}
                style={styles.backgroundContainer}
                resizeMode="cover" />

            <View style={styles.foregroundContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Create{"\n"}Account</Text>
                    <TouchableOpacity style={styles.uploadPhotoStyle}>
                        <Image source={UpLoadPhotoImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={styles.emailInput}
                            placeholder="Email"
                            placeholderTextColor="#D2D2D2"
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Password"
                                placeholderTextColor="#D2D2D2"
                                autoCapitalize='none'
                                secureTextEntry={secure}
                            />
                            <TouchableOpacity onPress={() => setSecure(!secure)}>
                                <Ionicons
                                    name={secure ? "eye-off-outline" : "eye-outline"}
                                    size={16}
                                    color="black"
                                    style={styles.passwordToggle}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <TouchableOpacity
                                onPress={() => setCountryPickerVisible(true)}
                                style={styles.flagContainer}
                                activeOpacity={0.8}>
                                <CountryPicker
                                    visible={countryPickerVisible}
                                    onClose={() => setCountryPickerVisible(false)}
                                    onSelect={onCountrySelect}
                                    withFilter
                                    withEmoji={false}
                                    withFlag
                                    withCallingCode
                                    withCountryNameButton={false}
                                    countryCode={countryCode}
                                    theme={styles.countryPickerTheme}
                                />
                                <Ionicons name="chevron-down" size={16} color="#1F1F1F" />
                            </TouchableOpacity>

                            <View style={styles.divider} />

                            <TextInput
                                style={styles.countryCodeInput}
                                placeholder="Your Number"
                                keyboardType="phone-pad"
                                value={phone}
                                onChangeText={setPhone}
                                placeholderTextColor="#D2D2D2"
                            />
                        </View>
                    </View>

                    <View style={styles.buttonSection}>
                        <TouchableOpacity style={styles.doneButton}>
                            <Text style={styles.doneButtonText}>Done</Text>
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
        aspectRatio: 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    foregroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
    },
    header: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        lineHeight: 54,
        color: "#202020",
        marginVertical: 24,
    },
    uploadPhotoStyle: {
        marginVertical: 32,
        marginStart: 8,
    },
    footer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
    },
    inputSection: {
        flex: 1,
    },
    buttonSection: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    emailInput: {
        width: "100%",
        backgroundColor: "#F8F8F8",
        fontSize: 14,
        padding: 16,
        borderRadius: 60,
        marginBottom: 8,
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#F8F8F8",
        padding: 18,
        borderRadius: 60,
        marginBottom: 8,
    },
    passwordInput: {
        flex: 1,
        fontSize: 14,
    },
    passwordToggle: {
        transform: [{ scaleX: -1 }],
        marginHorizontal: 12
    },
    flagContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 4,
    },
    divider: {
        width: 1,
        height: "100%",
        backgroundColor: "#1F1F1F",
        marginHorizontal: 8,
    },
    countryCodeInput: {
        flex: 1,
        fontSize: 14,
    },
    countryPickerTheme: {
        flagSizeButton: 14,
    },
    doneButton: {
        width: "100%",
        marginHorizontal: 24,
        backgroundColor: "#004CFF",
        borderRadius: 16,
    },
    doneButtonText: {
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
