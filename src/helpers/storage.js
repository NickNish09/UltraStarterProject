import { AsyncStorage } from "react-native";

const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Saved " + key + "with value" + value);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async loadItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      } else {
        return null
      }
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async removeValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Removed " + key);
    } catch (error) {
      console.log("Async storage error: " + error.message);
    }
  }
};

export default deviceStorage;
