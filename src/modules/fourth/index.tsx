import {View, Text, FlatList, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';

export default function Fourth() {
  const [data, setData] = useState([]);
  const [extra, setExtra] = useState([{name: ''}]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        setData(res);
      });
  }, []);

  const renderItem = (item: any) => {
    console.log('item', item);
    return (
      <View>
        <Text>{item.item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}
