import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import RegistrationBackground from "@/assets/images/registration-background.png"
import UpLoadPhotoImage from "@/assets/images/upload-photo.png"
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'
import { useRouter } from "expo-router";
import { makeStyles } from "@/src/theme/makeStyles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { useTheme } from "@/src/theme/ThemeProvider";
import VerticalDivider from "@/src/components/VerticalDivider";
import PrimaryButton from "@/src/components/PrimaryButton";
import TertiaryButton from "@/src/components/TertiaryButton";

export default function RegisterScreen() {

    const { theme } = useTheme();
    const styles = useStyle();
    const commonStyles = useCommonStyles();
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
                style={[commonStyles.fullWidth, styles.backgroundContainer]}
                resizeMode="cover" />

            <View style={[commonStyles.container, styles.foregroundContainer]}>
                <View style={[commonStyles.fullFlex, styles.header]}>
                    <Text style={styles.title}>Create{"\n"}Account</Text>
                    <TouchableOpacity style={styles.uploadPhotoStyle}>
                        <Image source={UpLoadPhotoImage} />
                    </TouchableOpacity>
                </View>

                <View style={commonStyles.fullFlex}>
                    <TextInput
                        style={[
                            theme.typography.fontStyle.bodyMedium,
                            commonStyles.authInputContainer
                        ]}
                        placeholder="Email"
                        placeholderTextColor={theme.colors.primaryPlaceHolder}
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />

                    <View style={commonStyles.authInputContainer}>
                        <TextInput
                            style={theme.typography.fontStyle.bodyMedium}
                            placeholder="Password"
                            placeholderTextColor={theme.colors.primaryPlaceHolder}
                            autoCapitalize='none'
                            secureTextEntry={secure}
                        />
                        <TouchableOpacity onPress={() => setSecure(!secure)}>
                            <Ionicons
                                name={secure ? "eye-off-outline" : "eye-outline"}
                                size={16}
                                color={theme.colors.divider}
                                style={styles.passwordToggle}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={commonStyles.authInputContainer}>
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
                                containerButtonStyle={{ marginBottom: 4, }}
                                theme={styles.countryPickerTheme}
                            />
                            <Ionicons name="chevron-down" size={16} color={theme.colors.divider} />
                        </TouchableOpacity>

                        <VerticalDivider />

                        <TextInput
                            style={[commonStyles.fullFlex, theme.typography.fontStyle.bodyMedium]}
                            placeholder="Your Number"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                            placeholderTextColor={theme.colors.primaryPlaceHolder}
                        />
                    </View>

                    <View style={styles.buttonSection}>
                        <PrimaryButton
                            text={"Done"}
                            containerStyle={commonStyles.fullWidth}
                            onPress={() => {
                                router.replace("/shop/whats-new");
                            }} />
                        <TertiaryButton
                            text={"Cancel"}
                            containerStyle={styles.cancelButtonContainer}
                            onPress={() => { router.back() }}
                        />
                    </View>
                </View>
            </View>

        </View >
    );
}

const useStyle = makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    backgroundContainer: {
        position: "absolute",
        aspectRatio: 1.25,
    },
    foregroundContainer: {
        backgroundColor: "transparent",
    },
    header: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    title: {
        ...theme.typography.fontStyle.displayLarge,
        color: theme.colors.primaryText,
        marginVertical: theme.metrics.spacing.xLarge,
    },
    uploadPhotoStyle: {
        marginVertical: theme.metrics.spacing.xxLarge,
        marginStart: theme.metrics.spacing.xSmall,
    },
    buttonSection: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    passwordToggle: {
        transform: [{ scaleX: -1 }],
        marginHorizontal: theme.metrics.spacing.small
    },
    flagContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: theme.metrics.spacing.xxSmall,
    },
    countryPickerTheme: {
        flagSizeButton: theme.metrics.iconSize.flagIcon,
    },
    cancelButtonContainer: {
        marginVertical: theme.metrics.spacing.xLarge
    },
}));
