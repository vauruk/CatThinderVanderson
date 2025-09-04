import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../store/catSlice';
import { RootState } from '../store/store';
import CatDetailCard from '../components/CatDetailCard';

export const CatTinderScreen = () => {
  const dispatch = useDispatch();
  const { cats, loading } = useSelector((state: RootState) => state.cats);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCats(10) as any);
  }, [dispatch]);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#FF6F61" />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cats}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              resizeMode="cover"
            />
            {selectedIndex === index && <CatDetailCard id={item.id} />}
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const idx = Math.round(
            e.nativeEvent.contentOffset.x /
              e.nativeEvent.layoutMeasurement.width,
          );
          setSelectedIndex(idx);
        }}
        extraData={selectedIndex}
      />
    </View>
  );
};

export default CatTinderScreen;
