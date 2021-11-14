import LocalAsyncStorage from '../storage/LocalAsyncStorage';

export default useStorage = () => {
  const storage = LocalAsyncStorage();

  const getSeed = () => storage.getItem('seed');

  const setSeed = (seed) => storage.setItem('seed', seed);

  // const isOnBoarded = () => storage.getItem('onBoarded');

  // const markAsOnBoarded = () => storage.setItem('onBoarded', 'ON_BOARDED');

  return {
    getSeed: getSeed,
    setSeed: setSeed,
    // isOnBoarded: isOnBoarded,
    // markAsOnBarded: markAsOnBoarded,
  };
};
