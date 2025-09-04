import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../store/catSlice';
import { RootState } from '../store/store';
import CatDetailCard from '../components/CatDetailCard';
import Row from '../components/FlexBox/Row';
import Col from '../components/FlexBox/Col';

export const CatTinderScreen = () => {
  const dispatch = useDispatch();
  const { cats, loading } = useSelector((state: RootState) => state.cats);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCats(100) as any);
  }, [dispatch]);

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} size="large" color="#FF6F61" />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ height: '60%' }}>
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
      <View style={styles.buttonBar}>
        <Row>
          <Col flex={0.5}>
            <TouchableHighlight
              style={styles.actionButton}
              onPress={() => {}}
              underlayColor={'#8d7373ff'}
            >
              <Image source={require('../assets/hate.png')} />
            </TouchableHighlight>
          </Col>
          <Col flex={0.5}>
            <TouchableHighlight
              style={styles.actionButton}
              onPress={() => {}}
              underlayColor={'#8d7373ff'}
            >
              <Image source={require('../assets/like.png')} />
            </TouchableHighlight>
          </Col>
        </Row>
      </View>
      <View style={styles.actionBar}>
        <Row>
          <Col flex={0.33}>
            <TouchableHighlight onPress={() => {}} underlayColor={'#8d7373ff'}>
              <Image source={require('../assets/powcat.png')} />
            </TouchableHighlight>
          </Col>
          <Col flex={0.33}>
            <TouchableHighlight onPress={() => {}} underlayColor={'#8d7373ff'}>
              <Image source={require('../assets/message-circle.png')} />
            </TouchableHighlight>
          </Col>
          <Col flex={0.33}>
            <TouchableHighlight onPress={() => {}} underlayColor={'#8d7373ff'}>
              <Image source={require('../assets/user.png')} />
            </TouchableHighlight>
          </Col>
        </Row>
      </View>
    </View>
  );
};

export default CatTinderScreen;
