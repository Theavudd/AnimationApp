import {FlatList, ImageBackground, Dimensions, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import AnimatedItem from './animatedItem';
import {getMovies} from './action';
import NormalItem from './normalItem';
import {API} from '../../utils/API';
import {LocalImages} from '../../utils/localImages';
import {useDebounce} from '../../utils/commonFunctions';

const viewabilityConfig = {
  waitForInteraction: true,
  itemVisiblePercentThreshold: 60,
};
const {height, width} = Dimensions.get('screen');

export default function Main() {
  const [page, setPage] = useState(1);
  const [data, setData]: any = useState([]);
  const [ViewableIndex, setViewableIndex] = useState(0);
  const listRef: any = useRef(null);

  useEffect(() => {
    getMovies(
      page,
      response => {
        setData(response?.data?.results);
      },
      error => {
        console.log('error', error);
      },
    );
  }, []);

  const onViewableItemsChanged = React.useCallback(
    async ({viewableItems, changed}: any) => {
      setViewableIndex(await useDebounce(viewableItems[0]?.index, 200));
      // setViewableIndex(viewableItems[0]?.index);
    },
    [],
  );

  const renderAnimatedView = (item: any, index: number) => {
    return <AnimatedItem item={item} index={index} length={data.length} />;
  };

  const renderNormalView = (item: any, index: number) => {
    return <NormalItem item={item} index={index} length={data.length} />;
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    if (ViewableIndex === index) return renderAnimatedView(item, index);
    else return renderNormalView(item, index);
  };

  const onScrollEndDrag = (event: any) => {
    listRef?.current?.scrollToIndex({
      animated: true,
      index: ViewableIndex,
      viewOffset: 85,
    });
  };

  return (
    <ImageBackground
      source={{uri: `${API.getImg}${data[ViewableIndex]?.backdrop_path}`}}
      blurRadius={10}
      resizeMode={'cover'}
      defaultSource={LocalImages.defaultImage}
      style={styles.container}>
      <FlatList
        ref={listRef}
        data={data}
        renderItem={renderItem}
        horizontal
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        onScrollEndDrag={onScrollEndDrag}
        contentContainerStyle={styles.listContainer}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{data[ViewableIndex]?.title}</Text>
        <Text style={styles.descriptionText}>
          {data[ViewableIndex]?.overview}
        </Text>
      </View>
    </ImageBackground>
  );
}
