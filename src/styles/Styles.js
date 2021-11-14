import { StyleSheet } from 'react-native';

const layout = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCenter2: {
    flex: 1,
    justifyContent: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  smallPriceContainer: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
  },
});

const text = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  title: {
    margin: 10,
  },
  subTitle: {
    marginRight: 10,
    marginLeft: 10,
  },
  wrap: {
    flex: 1,
    flexShrink: 1,
  },
});

const input = StyleSheet.create({
  input: {
    flex: 2,
    marginLeft: 10,
    marginRight: 1,
  },
  select: {
    flex: 1,
    marginRight: 10,
    marginLeft: 1,
  },
});

const button = StyleSheet.create({
  buttonLeftRight: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export { layout, text, input, button };
