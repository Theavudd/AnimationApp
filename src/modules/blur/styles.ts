import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    height: 100,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100,
    elevation: 100,
  },
  absolute: {
    height: 70,
    width: '100%',
    position: 'absolute',
    zIndex: 10,
  },
  image: {
    height: '1020%',
    width: '100%',
    paddingTop: 40,
    position: 'absolute',
    top: 0,
  },
  item: {
    height: 100,
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'lightgreen',
  },
});
