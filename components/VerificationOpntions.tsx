import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export enum VerificationType {
    SMS,
    EMAIL,
};

export default function VerificationOptions({
    verificationType, setVerificationType
}: {
    verificationType: VerificationType,
    setVerificationType: (verificationType: VerificationType) => void
}) {

    return (
        <View style={styles.verificationOptions}>
            <TouchableOpacity activeOpacity={1} style={styles.smsButton} onPress={() => {
                setVerificationType(VerificationType.SMS)
            }}>
                <Text style={styles.smsButtonText}>SMS</Text>

                <View style={[styles.bullet, (verificationType === VerificationType.SMS ? styles.smsBulletActive : styles.smsBulletInActive)]} >
                    {verificationType === VerificationType.SMS && (
                        <MaterialCommunityIcons name="check-bold" size={14} color="white" />
                    )}
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={styles.emailButton} onPress={() => {
                setVerificationType(VerificationType.EMAIL)
            }}>
                <Text style={styles.emailButtonText}>Email</Text>
                <View style={[styles.bullet, (verificationType === VerificationType.EMAIL ? styles.emailBulletActive : styles.emailBulletInActive)]} >
                    {verificationType === VerificationType.EMAIL && (
                        <MaterialCommunityIcons name="check-bold" size={14} color="white" />
                    )}
                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
})
