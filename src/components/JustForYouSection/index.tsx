import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import JustForYouItem from "../JustForYouItem";
import { NewItem } from "@/src/types/shop-tabs";

export default function JustForYouSection({
    items,
}: {
    items: NewItem[];
}) {
    return (
        <View style={styles.forYouContainer}>
            <View style={[styles.listHeader, { justifyContent: "flex-start" }]}>
                <Text style={styles.listTitle}>Just For You</Text>
                <Ionicons name="star" size={14} color="#004CFF" />
            </View>
            <FlatList
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <JustForYouItem
                            key={item.id}
                            index={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.image} />
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
            />
        </View>
    );
}
