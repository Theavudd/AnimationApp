import {
  View,
  Text,
  FlatList,
  Dimensions,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('screen');

export default function DynamicColumn() {
  const [data, setData] = useState(['']);
  const getWidth = () => {
    let value = width - 100;
    if (data.length > 4) {
      return value / 4;
    } else {
      return value / data.length;
    }
  };
  const renderItem = () => {
    return (
      <View
        style={{
          height: 100,
          width: getWidth(),
          backgroundColor: 'aqua',
          margin: 5,
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={data.length < 4 ? data.length : 4}
        key={data.length}
        contentContainerStyle={{
          alignSelf: 'center',
          //   padding: 10,
          //   flexDirection: 'row',
          //   flexWrap: 'wrap',
          //   alignItems: 'center',
          //   //   justifyContent: 'center',
          //   width: '100%',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
        }}>
        <Button
          title={'add'}
          onPress={() => {
            setData([...data, '']);
          }}
        />
        <Button
          title={'delete'}
          onPress={() => {
            data.pop();
            setData([...data]);
          }}
          color={'blue'}
        />
      </View>
    </SafeAreaView>
  );
}
