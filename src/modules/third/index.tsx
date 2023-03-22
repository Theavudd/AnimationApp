import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

export default function Third() {
  const animated = useSharedValue(1);
  const scaleAnimated = useSharedValue(0);
  const borderAnimated = useSharedValue(0);

  const reanimatedStyle = () =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {scale: scaleAnimated.value},
          {translateX: scaleAnimated.value},
          {rotate: `${2 * Math.PI * animated.value}rad`},
        ],
        borderRadius: borderAnimated.value,
      };
    }, []);

  const fadeOut = () => {
    animated.value = withTiming(0.5, {duration: 1000});
    scaleAnimated.value = withSpring(scaleAnimated.value - 1);
    borderAnimated.value = withSpring(borderAnimated.value - 10);
  };

  const fadeIn = () => {
    animated.value = withTiming(1, {duration: 1000});
    borderAnimated.value = withSpring(borderAnimated.value + 10);
    scaleAnimated.value = withTiming(scaleAnimated.value + 1, {duration: 1000});
  };

  const scale = () => {
    scaleAnimated.value = withTiming(scaleAnimated.value + 1, {duration: 1000});
  };
  const shrink = () => {
    scaleAnimated.value = withSpring(scaleAnimated.value - 1);
  };
  const borderIncrease = () => {
    borderAnimated.value = withSpring(borderAnimated.value + 10);
  };
  const borderDecrease = () => {
    borderAnimated.value = withSpring(borderAnimated.value - 10);
  };

  const rotate = () => {
    animated.value = withTiming(animated.value + 1, {duration: 5000});
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'red',
            borderRadius: 10,
          },
          reanimatedStyle(),
        ]}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
      <Button title="ScaleOut" onPress={scale} />
      <Button title="Shrink" onPress={shrink} />
      <Button title="Border Increase" onPress={borderIncrease} />
      <Button title="Border Decrease" onPress={borderDecrease} />
      <Button title="Rotate" onPress={rotate} />
    </SafeAreaView>
  );
}
