import {
  Text,
  ImageBackground,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {API} from '../../utils/API';
import {LocalImages} from '../../utils/localImages';
import {getMovies} from '../main/action';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useDebounce} from '../../utils/commonFunctions';

const viewabilityConfig = {
  waitForInteraction: true,
  itemVisiblePercentThreshold: 50,
};
const {height, width} = Dimensions.get('screen');

export default function Alternate() {
  const [page, setPage] = useState(1);
  const [data, setData]: any = useState([]);
  const [currentView, setCurrentView]: any = useState({index: 0, item: {}});
  // let debounced = debounce(currentView, 1000);
  const [scroll, setScroll] = useState(0);
  const listRef: any = useRef(null);
  const animation = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   if (!true) {
  //     listRef?.current?.scrollToIndex({
  //       animated: true,
  //       index: currentView.index,
  //     });
  //   }
  //   else{
  //     initial()
  //   }
  // }, [debounced]);

  useEffect(() => {
    getMovies(
      page,
      response => {
        setData(response?.data?.results);
        setCurrentView({index: 0, item: response?.data?.results[0]});
      },
      error => {
        console.log('error', error);
      },
    );
  }, []);

  const storeCurrent: any = useDebounce((viewableItems: any) => {
    setCurrentView(viewableItems[0]);
  }, 300);

  const onViewableItemsChanged = React.useCallback(({viewableItems}: any) => {
    storeCurrent(viewableItems);
    setScroll(viewableItems[0]?.index);
  }, []);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <Animated.View
        style={[
          styles.itemContainer,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [
                    250 * (index - 1),
                    250 * index,
                    250 * (index + 1),
                  ],
                  outputRange: [0, -80, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <FastImage
          resizeMode="contain"
          defaultSource={LocalImages.defaultImage}
          source={{uri: `${API.getImg}${item?.poster_path}`}}
          style={[styles.image]}
        />
      </Animated.View>
    );
  };

  const onScroll = (event: any) => {
    const {nativeEvent} = event;
    const {contentOffset} = nativeEvent;
    animation.setValue(contentOffset.x);
  };

  // console.log('index', currentView);

  const onScrollEndDrag = () => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: scroll,
    });
  };

  return (
    <ImageBackground
      source={{uri: `${API.getImg}${currentView?.item?.poster_path}`}}
      blurRadius={10}
      resizeMode={'cover'}
      defaultSource={LocalImages.defaultImage}
      style={styles.container}>
      <Animated.FlatList
        ref={listRef}
        data={data}
        renderItem={renderItem}
        horizontal
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        onMomentumScrollEnd={onScrollEndDrag}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <SafeAreaView style={styles.infoContainer}>
        <Text style={styles.titleText}>{currentView.item?.title}</Text>
        <Text style={styles.descriptionText}>{currentView.item?.overview}</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}
