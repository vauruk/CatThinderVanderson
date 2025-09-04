import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Image, ActivityIndicator, Text } from 'react-native';
import { color, styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../store/catSlice';
import { RootState } from '../store/store';
import CatDetailCard from '../components/CatDetailCard';
import Row from '../components/FlexBox/Row';
import Col from '../components/FlexBox/Col';
import Button from '../components/Button';
import { sendVote } from '../store/voteSlice';

export const CatTinderScreen = () => {
  const dispatch = useDispatch();
  const { cats, loading } = useSelector((state: RootState) => state.cats);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const voteState = useSelector((state: RootState) => state.vote);

  useEffect(() => {
    dispatch(fetchCats(100) as any);
  }, [dispatch]);

  if (loading) {
    return (
      <ActivityIndicator
        style={styles.loader}
        size="large"
        color={color.error}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Row>
          <Col flex={0.5}>
            <Button
              style={styles.actionHeaderBarButton}
              icon={require('../assets/flame.png')}
              onPress={() => {}}
            />
          </Col>
          <Col flex={0.5}>
            <Button
              style={styles.actionHeaderBarButton}
              icon={require('../assets/star.png')}
              onPress={() => {}}
              disabled={true}
            />
          </Col>
        </Row>
      </View>
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
              onPress={async () => {
                const currentCat = cats[selectedIndex];
                if (currentCat) {
                  await dispatch(
                    sendVote({
                      image_id: currentCat.id,
                      sub_id: 'user-vandersonvauruk',
                      value: 1,
                    }) as any,
                  );
                }
                if (selectedIndex < cats.length - 1) {
                  flatListRef.current?.scrollToIndex({
                    index: selectedIndex + 1,
                    animated: true,
                  });
                  setSelectedIndex(selectedIndex + 1);
                }
              }}
              loading={voteState.loading}
            />
          </Col>
        </Row>
      </View>
      {voteState.error && (
        <View style={{ marginTop: 8 }}>
          <Text style={{ color: 'red', textAlign: 'center' }}>
            {voteState.error}
          </Text>
        </View>
      )}
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
