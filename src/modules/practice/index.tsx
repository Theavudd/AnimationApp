import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SET_DATA} from '../../utils/actionTypes';

export default function Practice() {
  const dispatch = useDispatch();
  const {title} = useSelector((state: any) => state.AuthReducer);
  return (
    <SafeAreaView>
      <Text>{title}</Text>
      <Button
        title={'Insert'}
        onPress={() => {
          dispatch({type: SET_DATA, payload: {title: 'hello'}});
        }}
      />
      <Button
        title={'Update'}
        onPress={() => {
          dispatch({type: SET_DATA, payload: {title: 'Hello Worled'}});
        }}
      />
    </SafeAreaView>
  );
}
