import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');
console.log('heigt', height, width);

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  itemContainer: {
    height: 280,
    width: 250,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  listContainer: {
    alignItems: 'center',
    marginLeft: 75,
    paddingRight: 150,
    overflow: 'visible',
    height: '100%',
    paddingBottom: '10%',
  },
  infoContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: '10%',
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
