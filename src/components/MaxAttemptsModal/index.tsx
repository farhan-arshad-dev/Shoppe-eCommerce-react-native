import React from "react";
import { Modal, View, Text } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTheme } from "@/src/providers/ThemeProvider";
import { useStyles } from "./styles";
import { useCommonStyles } from "@/src/styles/commonStyles";
import PrimaryButton from "../PrimaryButton";

export default function PasswordResetErrorModal({
    visible,
    onClose,
}: {
    visible: boolean;
    onClose: () => void;
}) {

    const { theme } = useTheme();
    const commonStyles = useCommonStyles();

    const styles = useStyles();

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}>

            <View style={[commonStyles.centerFull, styles.overlay]}>
                <View style={styles.modalContainer}>

                    <View style={[commonStyles.centerContent, styles.iconCard]}>
                        <View style={[
                            commonStyles.centerContent,
                            styles.outerCircle
                        ]}>
                            <View style={styles.innerCircle}>
                                <FontAwesome6
                                    name="exclamation"
                                    size={theme.metrics.componentSizes.infoIcon}
                                    color={theme.colors.background} />
                            </View>
                        </View>
                    </View>

                    <View style={[commonStyles.fullWidth, commonStyles.centerContent]}>
                        <Text style={styles.message}>You reached out maximum{"\n"}amount of attempts.{"\n"}Please, try later.</Text>
                        <PrimaryButton
                            text={"Okay"}
                            onPress={onClose}
                            containerStyle={[
                                commonStyles.slimButton,
                                styles.okayButton
                            ]} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
