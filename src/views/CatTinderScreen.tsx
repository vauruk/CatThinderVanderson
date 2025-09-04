import React, { useEffect } from 'react';
import { View, FlatList, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../store/catSlice';
import { RootState } from '../store/store';

export const CatTinderScreen = () => {
  const dispatch = useDispatch();
  const { cats, loading } = useSelector((state: RootState) => state.cats);

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
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CatTinderScreen;
