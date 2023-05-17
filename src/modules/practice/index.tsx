import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import React, {Dispatch} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SET_DATA} from '../../utils/actionTypes';
import {APICALL} from './action';
import Demo from './demo';

export default function Practice() {
  const dispatch: Dispatch<any> = useDispatch();
  const {title} = useSelector((state: any) => state.AuthReducer);
  return (
    <SafeAreaView>
      {/* <Text>{title}</Text> */}
      <Button
        title={'Insert'}
        onPress={() => {
          console.log('skdjhkjfh');
          dispatch({type: 'SagaInc', payload: {title: 'hello'}});
        }}
      />
      <Button
        title={'Update'}
        onPress={() => {
          dispatch({type: SET_DATA, payload: {title: 'Hello Worled'}});
        }}
      />
      <Button
        title={'API'}
        onPress={() => {
          dispatch(APICALL());
        }}
      />
      <Text>{JSON.stringify(title)}</Text>
      {/* <Demo customStyle={[styles.custom]} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  custom: {
    backgroundColor: 'red',
  },
  custom2: {
    borderColor: 'red',
    borderWidth: 2,
  },
});
