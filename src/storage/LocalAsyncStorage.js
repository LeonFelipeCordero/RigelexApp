import AsyncStorage from '@react-native-async-storage/async-storage';

export default LocalAsyncStorage = () => {
  const getItem = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      throw Exception('something went wrong getting data from storage');
    }
  };

  const setItem = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (e) {
      throw Exception('something went wrong setting data from storage');
    }
  };

  return {
    getItem: getItem,
    setItem: setItem,
  };
};
