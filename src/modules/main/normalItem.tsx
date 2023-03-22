import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {API} from '../../utils/API';

export default function NormalItem({item, index}: any) {
  return (
    <FastImage
      resizeMode="contain"
      source={{uri: `${API.getImg}${item?.poster_path}`}}
      style={styles.itemContainer}></FastImage>
  );
}
