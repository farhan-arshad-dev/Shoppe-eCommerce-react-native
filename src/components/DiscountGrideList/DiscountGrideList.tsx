import { View } from "react-native";
import GridListView from "../GridListView";
import { ItemType, NewItem } from "@/src/types/shop-tabs";
import Banner from "../Banner";
import JustForYouItem from "../JustForYouItem";
import { useCommonStyles } from "@/src/styles/commonStyles";

export default function DiscountGrideList({
    items,
}: {
    items: NewItem[],
}) {

    const commonStyles = useCommonStyles();

    return (
        <View style={commonStyles.container}>
            <GridListView<NewItem>
                data={items}
                itemSpacing={4}
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
                        <View style={[commonStyles.bannerView, { marginVertical: 8 }]}>
                            <Banner
                                key={item.id}
                                image={item.image} />
                        </View>
                    );
                }}
                numColumns={2}
                keyExtractor={(item, index) => item.id.toString()}
                scrollEnabled={false}
            />
        </View>
    );
};
