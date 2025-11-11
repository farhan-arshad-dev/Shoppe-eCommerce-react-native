import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorage = {
    async setItem(key: string, value: any) {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    },

    async getItem<T = any>(key: string): Promise<T | null> {
        const item = await AsyncStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },

    async removeItem(key: string) {
        await AsyncStorage.removeItem(key);
    },

    async clear() {
        await AsyncStorage.clear();
    },
};
