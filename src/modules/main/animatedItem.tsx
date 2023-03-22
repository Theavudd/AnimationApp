import {View, Text, Animated} from 'react-native';
import React, {AnimationEvent, useEffect, useRef} from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {API} from '../../utils/API';

export default function AnimatedItem({
  item,
  index,
  length,
  animated,
  contentSize,
}: {
  item: any;
  index: number;
  length: number;
  animated: any;
  contentSize: number;
}) {
  //   const animate = () => {
  //     Animated.timing(animated, {
  //       toValue: -50,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start();
  //   };

  useEffect(() => {}, []);

  return (
    <Animated.View
      style={[
        styles.itemContainer,
        styles.itemOuterContainer,
        index == 0 ? styles.initialItem : {},
        index == length - 1 ? styles.lastItem : {},
        {
          transform: [
            {
              translateY: animated.interpolate({
                inputRange: [0, contentSize],
                outputRange: [0, 1],
              }),
            },
          ],
        },
      ]}>
      <FastImage
        resizeMode="stretch"
        source={{uri: `${API.getImg}${item?.poster_path}`}}
        style={[styles.itemContainer]}
      />
    </Animated.View>
  );
}
