import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Default, keyboardData} from './static';
import {styles} from './styles';

export default function MyComp() {
  const [boxData, setBoxData] = useState(Array(30).fill(''));
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onBoxPress = (index: number) => {
    setSelectedIndex(index);
  };

  const checkExist = (element: string, elementIndex: number) => {
    if (element !== '') {
      let returnType = 'notExist';
      Object.keys(Default).forEach((item: string, index: number) => {
        if (parseInt(item) === elementIndex) {
          if (Default[item] == element) {
            if (returnType !== 'exist') returnType = 'exist';
          }
        } else if (Default[item] == element) {
          if (returnType != 'exist') returnType = 'wrongIndex';
        }
      });
      return returnType;
    }
  };

  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={[
          styles.boxListItem,
          checkExist(item, index) === 'exist' && styles.itemExist,
          checkExist(item, index) === 'wrongIndex' && styles.itemCorrect,
          checkExist(item, index) === 'notExist' && styles.notExist,
        ]}>
        <TextInput
          value={item}
          style={styles.itemInput}
          onFocus={() => onBoxPress(index)}
        />
      </View>
    );
  };

  const onKeyPress = (item: string) => {
    if (item == 'enter') {
    } else if (item == 'back') {
      boxData[selectedIndex] = '';
      setBoxData([...boxData]);
    } else {
      boxData[selectedIndex] = item;
      setBoxData([...boxData]);
    }
  };

  const renderKeyboard = ({item, index}: any) => {
    let temp = item.toUpperCase();
    if (item == 'enter') {
      return (
        <TouchableOpacity
          style={styles.bigButtonEnter}
          activeOpacity={0.8}
          onPress={() => onKeyPress(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      );
    } else if (item === 'back') {
      return (
        <TouchableOpacity
          style={[styles.bigButtonEnter, {width: 50}]}
          activeOpacity={0.8}
          onPress={() => onKeyPress(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.keyboardKeyContainer}
        activeOpacity={0.8}
        onPress={() => onKeyPress(temp)}>
        <Text>{temp}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={boxData}
        renderItem={renderItem}
        scrollEnabled={false}
        bounces={false}
        contentContainerStyle={styles.boxListContainer}
      />
      <FlatList
        data={keyboardData}
        renderItem={renderKeyboard}
        scrollEnabled={false}
        bounces={false}
        contentContainerStyle={styles.keyboardContainer}
      />
    </SafeAreaView>
  );
}
