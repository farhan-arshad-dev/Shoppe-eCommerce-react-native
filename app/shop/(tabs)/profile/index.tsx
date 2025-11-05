import AvatarImage from "@/src/components/AvatarImage";
import IconBadge from "@/src/components/IconBadge";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScanIcon from "@/assets/images/scan-icon.png";
import MessageIcon from "@/assets/images/message-icon.png";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import LongArrowIcon from "@/src/components/LongArrowIcon";
import { categories, justForYouItems, newItems, popularItems, saleItems, stroies, topProducts } from "@/src/data/shop-tabs-data";
import StoriesItem from "@/src/components/StoriesItem";
import NewItemsListSection from "@/src/components/NewItemsListSection";
import CategorySection from "@/src/components/CategorySection";
import MostPopularListSection from "@/src/components/MostPopularListSection";
import FlashSaleSection from "@/src/components/FlashSaleSection";
import { useRouter } from "expo-router";
import TopProductsSection from "@/src/components/TopProductsSection";
import JustForYouSection from "@/src/components/JustForYouSection";
import { useState } from "react";
import { RootState } from "@/src/redux/store/store";
import { useSelector } from "react-redux";

export default function ProfileScreen() {

    const userName = useSelector((state: RootState) => state.userData.userName?.split(" ")[0]);

    const avatar = "https://www.w3schools.com/howto/img_avatar.png"
    const router = useRouter();

    const [activeStoryIndex, setActiveStoryIndex] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <AvatarImage image={avatar} cardSize={43} imageSize={40} />
                    <View style={styles.myActivityContainer}>
                        <Text style={styles.myActivityText}>My Activity</Text>
                    </View>
                </View>
                <View style={styles.manuContainer}>
                    <IconBadge>
                        <Image source={ScanIcon} style={styles.menuIcon} />
                    </IconBadge>
                    <IconBadge showBadge={true}>
                        <Image source={MessageIcon} style={styles.messageIcon} />
                    </IconBadge>
                    <IconBadge>
                        <EvilIcons name="gear" size={20} color="#004CFF" />
                    </IconBadge>
                </View>
            </View>
            <Text style={styles.title}>Hello, {userName}!</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.announcementCard}>
                    <View style={styles.announcementTextContainer}>
                        <Text style={styles.announcementTitle}>Announcement</Text>
                        <Text style={styles.announcementDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.</Text>
                    </View>
                    <LongArrowIcon />
                </View>
                <View style={styles.recentlyViewSection}>
                    <View style={styles.listHeader}>
                        <Text style={styles.listTitle}>Recently viewed</Text>
                    </View>
                    <FlatList
                        data={topProducts}
                        renderItem={({ item }) => {
                            return (
                                <AvatarImage image={item.image} />
                            );
                        }}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalList}
                    />
                </View>
                <View style={styles.myOrdersSection}>
                    <View style={styles.listHeader}>
                        <Text style={styles.listTitle}>My Orders</Text>
                    </View>
                    <View style={styles.orderActions}>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>To Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>To Recieve</Text>
                            <View style={styles.dot} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>To Review</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.myOrdersSection}>
                    <View style={styles.listHeader}>
                        <Text style={styles.listTitle}>Stories</Text>
                    </View>
                    <FlatList
                        data={stroies}
                        renderItem={({ item, index }) => {
                            return (
                                <StoriesItem
                                    key={item.id}
                                    isActive={index === activeStoryIndex}
                                    onActive={() => setActiveStoryIndex(index)}
                                    isLive={index === 0}
                                    imageUrl={item.image} />
                            );
                        }}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalList}
                    />
                </View>

                <NewItemsListSection items={newItems} />

                <MostPopularListSection items={popularItems} />

                <CategorySection categories={categories} />

                <FlashSaleSection items={saleItems} onPress={() => {
                    // router.push('/shop/(tabs)/home/flash-sale');
                }} />

                <TopProductsSection items={topProducts} />

                <JustForYouSection items={justForYouItems} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 72,
        backgroundColor: "#ffffff"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    avatarContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    manuContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    myActivityContainer: {
        backgroundColor: "#004CFF",
        marginStart: 16,
        borderRadius: 18,
    },
    myActivityText: {
        fontSize: 16,
        fontWeight: "medium",
        lineHeight: 20,
        marginHorizontal: 18,
        marginVertical: 8,
        color: "#ffffff"
    },
    menuIcon: {
        width: 16,
        height: 16,
        color: "#004CFF",
    },
    messageIcon: {
        width: 12,
        height: 12,
        color: "#004CFF",
    },
    title: {
        marginVertical: 20,
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 36,
    },
    announcementCard: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    announcementTextContainer: {
        flex: 1
    },
    announcementTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#202020',
        marginBottom: 4,
    },
    announcementDescription: {
        fontSize: 10,
        color: '#000000',
        lineHeight: 15,
    },
    listHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        justifyContent: "space-between"
    },
    listTitle: {
        fontSize: 21,
        fontWeight: "bold",
        lineHeight: 30,
        color: "#202020",
        marginRight: 8,
    },
    recentlyViewSection: {
        marginTop: 18,
    },
    horizontalList: {
        gap: 8,
        marginBottom: 8
    },
    myOrdersSection: {
        marginTop: 18,
    },
    orderActions: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    orderButton: {
        backgroundColor: "#E5EBFC",
        borderRadius: 18,
    },
    orderButtonText: {
        color: "#0042E0",
        marginHorizontal: 20,
        marginVertical: 8,
        fontSize: 16,
        fontWeight: "medium",
        lineHeight: 21,
    },
    dot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#08C514',
        borderColor: "#ffffff",
        borderWidth: 2,
    },
});
