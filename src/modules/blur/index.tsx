import {
  View,
  Text,
  Image,
  Animated,
  FlatList,
  SafeAreaView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import {BlurView} from '@react-native-community/blur';

export default function BlurImp() {
  let animated = useRef(new Animated.Value(0)).current;
  const [data, setData] = useState(new Array(50).fill(''));

  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.item}>
        <Text>{index}</Text>
      </View>
    );
  };

  const onScroll = (event: any) => {
    const {nativeEvent} = event;
    const {contentOffset, layoutMeasurement} = nativeEvent;
    animated.setValue(contentOffset.y);
    // animated.setValue(event?.nativeEvent?.contentOffset?.y);
  };

  return (
    <View style={styles.container}>
      <Image
        key={'blurryImage'}
        source={{
          uri: 'https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <Animated.View
          style={{
            opacity: animated.interpolate({
              inputRange: [0, 200],
              outputRange: [0.01, Platform.OS === 'ios' ? 0.8 : 0.5],
              extrapolate: 'clamp',
            }),
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'grey',
          }}>
          <BlurView
            style={{height: 100, backgroundColor: 'grey'}}
            blurType="light"
            blurAmount={100}
          />
        </Animated.View>
        <Text
          style={{
            zIndex: 100,
            textAlign: 'center',
            top: 50,
          }}>
          {'hello'}
        </Text>
      </View>
      <FlatList data={data} renderItem={renderItem} onScroll={onScroll} />
    </View>
  );
}
