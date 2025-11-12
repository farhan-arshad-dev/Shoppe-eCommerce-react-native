import { secureStorage } from "./secure";
import { localStorage } from "./local";
import { SECURE_KEYS } from "./secure_keys";
import { STORAGE_KEYS, StorageKey } from "./storage_keys";

export const storage = {
    async setItem(key: StorageKey, value: any) {
        if (SECURE_KEYS.includes(key)) {
            await secureStorage.setItem(key, value);
        } else {
            await localStorage.setItem(key, value);
        }
    },

    async getItem(key: StorageKey) {
        if (SECURE_KEYS.includes(key)) {
            return await secureStorage.getItem(key);
        }
        return await localStorage.getItem(key);
    },

    async removeItem(key: StorageKey) {
        if (SECURE_KEYS.includes(key)) {
            await secureStorage.removeItem(key);
        } else {
            await localStorage.removeItem(key);
        }
    },

    async clear(){
        const storageKeys = Object.values(STORAGE_KEYS);
        for (const key of storageKeys){
            this.removeItem(key);
        }
    }
};
