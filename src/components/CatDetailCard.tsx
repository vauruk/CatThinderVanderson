import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { CatDetailCardProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatDetail, clearCatDetail } from '../store/catDetailSlice';
import { RootState } from '../store/store';
import Row from './FlexBox/Row';
import Col from './FlexBox/Col';

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
      <View style={styles.card}>
        <ActivityIndicator
          style={styles.noDetailText}
          size="small"
          color="#FF6F61"
        />
      </View>
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
      <Row>
        <Col flex={0.7} style={styles.alignStart}>
          <Text style={styles.title}>{breed.name}</Text>
        </Col>
        <Col flex={0.3} style={styles.alignEnd}>
          <Text style={styles.title}>{breed.intelligence}</Text>
        </Col>
      </Row>
      <Row>
        <Col flex={0.7} style={styles.alignStart}>
          <Text style={styles.origin}>{breed.origin}</Text>
        </Col>
      </Row>
    </View>
  );
};

export default CatDetailCard;
