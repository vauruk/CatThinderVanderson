import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { CatDetailCardProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatDetail, clearCatDetail } from '../store/catDetailSlice';
import { RootState } from '../store/store';

export const CatDetailCard: React.FC<CatDetailCardProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector(
    (state: RootState) => state.catDetail,
  );

  useEffect(() => {
    dispatch(fetchCatDetail(id) as any);
    return () => {
      dispatch(clearCatDetail());
    };
  }, [id, dispatch]);

  if (loading)
    return (
      <ActivityIndicator style={styles.blank} size="small" color="#FF6F61" />
    );
  if (error || !detail || !detail.breeds || detail.breeds.length === 0) {
    return (
      <View style={styles.card}>
        <Text style={styles.noDetailText}>Vazio!</Text>
      </View>
    );
  }
  const breed = detail.breeds[0];
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{breed.name}</Text>
      <Text style={styles.text}>Origem: {breed.origin}</Text>
      <Text style={styles.text}>
        Expectativa de vida: {breed.life_span} anos
      </Text>
    </View>
  );
};

export default CatDetailCard;
