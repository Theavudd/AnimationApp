import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  boxListContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: vh(30),
  },
  boxListItem: {
    height: vh(40),
    width: vw(40),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw(10),
    backgroundColor: 'white',
    marginVertical: vh(10),
    borderWidth: 1,
    borderColor: 'black',
  },
  itemInput: {
    fontSize: vw(25),
  },
  keyboardKeyContainer: {
    height: vh(35),
    width: vw(27),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw(5),
    marginVertical: vh(5),
    borderWidth: 1,
    borderColor: 'black',
  },
  keyboardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: '40%',
    // marginHorizontal: vh(10),
  },
  bigButtonEnter: {
    height: vh(35),
    width: vw(40),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vh(5),
    marginVertical: vw(5),
    borderWidth: 1,
    borderColor: 'black',
  },
  itemExist: {
    backgroundColor: 'green',
  },
  itemCorrect: {
    backgroundColor: 'gold',
  },
  notExist: {
    backgroundColor: 'red',
  },
});
