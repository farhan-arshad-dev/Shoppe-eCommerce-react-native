import { FlatList, Pressable, Text, View } from "react-native";
import styles from "./styles";
import CountDownTimer from "../CountDownTimer";
import SalesItemLayout from "../SalesItem";
import { ProductItem } from "@/src/types/product";

export default function FlashSaleSection({
    items,
    onPress,
}: {
    items: ProductItem[];
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
                            discount={item.discountPercentage ? item.discountPercentage : "0"}
                            imageUrl={item.images[0]} />
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
