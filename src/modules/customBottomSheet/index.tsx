import React, {useRef, useState} from 'react';
import {View, Button, PanResponder, Animated} from 'react-native';

const BottomSheet = () => {
  const bottomSheetHeight = 300;
  const [sheetPosition] = useState(new Animated.Value(bottomSheetHeight));
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          sheetPosition.setValue(bottomSheetHeight - gestureState.dy);
        } else {
          sheetPosition.setValue(bottomSheetHeight);
        }
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          Animated.timing(sheetPosition, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(sheetPosition, {
            toValue: bottomSheetHeight,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={{flex: 1}}>
      <Button
        title="Open Bottom Sheet"
        onPress={() => {
          Animated.timing(sheetPosition, {
            toValue: bottomSheetHeight,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          marginHorizontal: 16,
          height: bottomSheetHeight,
          transform: [
            {
              translateY: sheetPosition.interpolate({
                inputRange: [0, bottomSheetHeight],
                outputRange: [bottomSheetHeight, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
          backgroundColor: 'aqua',
        }}
        {...panResponder.panHandlers}>
        {/* Content of the bottom sheet  */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 14,
            paddingVertical: 36,
          }}>
          {/* Add your content here */}
          <Button
            title="Close Bottom Sheet"
            onPress={() => {
              Animated.timing(sheetPosition, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
              }).start();
            }}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default BottomSheet;
