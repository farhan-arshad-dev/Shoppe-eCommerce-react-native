import { Text, View } from "react-native";
import { useStyles } from "./styles";
import GridListView from "../GridListView";
import { discountedItems } from "@/src/data/shop-tabs-data";
import { ItemType, NewItem } from "@/src/types/shop-tabs";
import Banner from "../Banner";
import JustForYouItem from "../JustForYouItem";
import { useCommonStyles } from "@/src/styles/commonStyles";

export default function DiscountGrideList() {

    const commonStyles = useCommonStyles();
    const styles = useStyles();

    return (
        <View style={commonStyles.container}>
            <GridListView<NewItem>
                data={discountedItems}
                isBanner={(item) => item.type === ItemType.BANNER}
                renderItem={(item, index) => {
                    return (
                        <JustForYouItem
                            key={item.id}
                            index={index}
                            title={item.title}
                            price={item.price}
                            discountedPrice={item.discountedPrice}
                            imageUrl={item.image} />
                    )
                }}
                renderBanner={(item, index) => {
                    return (
                        <View style={{ marginVertical: 20 }}>
                            <Banner
                                key={item.id}
                                image={item.image} />
                        </View>
                    );
                }}
                numColumns={2}
                keyExtractor={(item, index) => item.id.toString()}
                nestedScrollEnabled={false}
            />
        </View>
    );
};
