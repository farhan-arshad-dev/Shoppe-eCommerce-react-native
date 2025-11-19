import { View } from "react-native";
import GridListView from "../GridListView";
import Banner from "../Banner";
import JustForYouItem from "../JustForYouItem";
import { useCommonStyles } from "@/src/styles/commonStyles";
import { ItemType, ProductItem } from "@/src/types/product";

export default function DiscountGrideList({
    items,
}: {
    items: ProductItem[],
}) {

    const commonStyles = useCommonStyles();

    return (
        <View style={commonStyles.container}>
            <GridListView<ProductItem>
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
                            imageUrl={item.images[0]} />
                    )
                }}
                renderBanner={(item, index) => {
                    return (
                        <View style={[commonStyles.bannerView, { marginVertical: 8 }]}>
                            <Banner
                                key={item.id}
                                image={item.images[0]} />
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
