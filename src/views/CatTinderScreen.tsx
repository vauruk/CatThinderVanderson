import React, { useEffect } from 'react';
import { View, FlatList, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../store/catSlice';
import { RootState } from '../store/store';

const { width } = Dimensions.get('window');

export const CatTinderScreen = () => {
  const dispatch = useDispatch();
  const { cats, loading } = useSelector((state: RootState) => state.cats);

  useEffect(() => {
    dispatch(fetchCats(10) as any);
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator style={styles.loader} size="large" color="#FF6F61" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.url }} style={styles.image} resizeMode="cover" />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.85,
    height: width * 1.1,
    backgroundColor: '#fff',
    borderRadius: 24,
    marginHorizontal: width * 0.075,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
});

export default CatTinderScreen;
