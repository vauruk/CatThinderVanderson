import React, { useEffect, useRef, useState } from 'react';
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
import Button from '../components/Button';

export const CatTinderScreen = () => {
  const dispatch = useDispatch();
  const { cats, loading } = useSelector((state: RootState) => state.cats);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

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
          ref={flatListRef}
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
            <Button
              style={styles.actionButton}
              icon={require('../assets/hate.png')}
              onPress={() => {
                if (selectedIndex < cats.length - 1) {
                  flatListRef.current?.scrollToIndex({
                    index: selectedIndex + 1,
                    animated: true,
                  });
                  setSelectedIndex(selectedIndex + 1);
                }
              }}
            />
          </Col>
          <Col flex={0.5}>
            <Button
              style={styles.actionButton}
              icon={require('../assets/like.png')}
              onPress={() => {
                if (selectedIndex < cats.length - 1) {
                  flatListRef.current?.scrollToIndex({
                    index: selectedIndex + 1,
                    animated: true,
                  });
                  setSelectedIndex(selectedIndex + 1);
                }
              }}
            />
          </Col>
        </Row>
      </View>
      <View style={styles.actionBar}>
        <Row>
          <Col flex={0.33}>
            <Button
              style={styles.actionBarButton}
              icon={require('../assets/powcat.png')}
              onPress={() => {}}
            />
          </Col>
          <Col flex={0.33}>
            <Button
              style={styles.actionBarButton}
              icon={require('../assets/message-circle.png')}
              onPress={() => {}}
            />
          </Col>
          <Col flex={0.33}>
            <Button
              style={styles.actionBarButton}
              icon={require('../assets/user.png')}
              onPress={() => {}}
            />
          </Col>
        </Row>
      </View>
    </View>
  );
};

export default CatTinderScreen;
