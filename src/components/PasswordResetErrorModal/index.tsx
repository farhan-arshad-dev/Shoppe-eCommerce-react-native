import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import styles from "./styles";

export default function PasswordResetErrorModal({
    visible,
    onClose,
}: {
    visible: boolean;
    onClose: () => void;
}) {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}>

            <View style={styles.overlay}>
                <View style={styles.modalContainer}>

                    <View style={styles.iconCard}>
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}>
                                <FontAwesome6 name="exclamation" size={14} color="white" />
                            </View>
                        </View>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.message}>You reached out maximum{"\n"}amount of attempts.{"\n"}Please, try later.</Text>

                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}