import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  currentItemContainer: {
    backgroundColor: 'red',
    width: width - 160,
  },
  itemOuterContainer: {
    height: 300,
    width: width - 200,
    marginHorizontal: 20,
  },
  itemContainer: {
    height: 300,
    width: width - 200,
  },
  listContainer: {
    alignSelf: 'center',
  },
  initialItem: {
    marginLeft: 80,
  },
  lastItem: {
    marginRight: 80,
  },
  infoContainer: {
    alignItems: 'center',
    bottom: '20%',
    marginHorizontal: 20,
  },
  titleText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 24,
  },
  descriptionText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
});
export default styles;
