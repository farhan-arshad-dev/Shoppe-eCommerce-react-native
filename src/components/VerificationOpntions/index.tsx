import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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
