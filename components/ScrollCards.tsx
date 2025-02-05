import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ScrollCards = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    require('../assets/images/card1.png'),
    require('../assets/images/card2.png'),
    require('../assets/images/card3.png'),
    require('../assets/images/card4.png'),
    require('../assets/images/card5.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1 < images.length ? prevIndex + 1 : 0;
        scrollViewRef.current?.scrollTo({ x: nextIndex * (width * 0.8), animated: true });
        return nextIndex;
      });
    }, 3000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        pagingEnabled
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.card} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollCards;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 12
  },
  card: {
    width: width * 0.8, // Adjusting card width dynamically
    height: 90,
    borderRadius: 10,
  }
});
