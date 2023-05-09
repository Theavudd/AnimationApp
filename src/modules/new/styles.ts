import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  boxListContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxListItem: {
    height: 55,
    width: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  itemInput: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  keyboardKeyContainer: {
    height: 35,
    width: 27,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  keyboardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
    marginHorizontal: 10,
  },
  bigButtonEnter: {
    height: 35,
    width: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
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
