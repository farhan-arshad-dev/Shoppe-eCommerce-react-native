import { StyleSheet, Text, View } from "react-native";

export default function FlashSaleScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Flash Sale</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 56,
    },
});
