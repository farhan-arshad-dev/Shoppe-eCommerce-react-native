import { FlatList, Pressable, Text, View } from "react-native";
import styles from "./styles";
import CountDownTimer from "../CountDownTimer";
import SalesItemLayout from "../SalesItem";
import { SaleItem } from "@/src/types/shop-tabs";

export default function FlashSaleSection({
    items,
    onPress,
}: {
    items: SaleItem[];
    onPress: () => void;
}) {
    return (
        <Pressable style={styles.flashSaleContainer} onPress={onPress}>
            <View style={styles.listHeader}>
                <Text style={styles.listTitle}>Flash Sale</Text>
                <CountDownTimer hours={0} minutes={36} seconds={58} />
            </View>

            <FlatList
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <SalesItemLayout
                            key={item.id}
                            itemPosition={index}
                            discount={item.discount}
                            imageUrl={item.image} />
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
            />
        </Pressable>
    );
}
