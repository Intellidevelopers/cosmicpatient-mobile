import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const slides = [
  { id: '1', title: 'Your Virtual AI assistant and ', highlight: 'Diagnostic Partner.', description: 'Seamless virtual consultations, intelligent diagnosis at your fingertips', image: require('../assets/human-surrounded-by-dna.jpg') },
  { id: '2', title: 'Virtual consultation with ', highlight: 'Specialist', description: 'Connect with top specialists, Expert care to you anytime, anywhere.', image: require('../assets/doctor-from-future-concept.jpg') },
  { id: '3', title: 'With Health Education,', highlight: 'Learn, Understand, Thrive', description: 'Access reliable health resources and expert insights to guide you to better health.', image: require('../assets/portrait-surreal-sea-creature.jpg') },
  { id: '4', title: 'Telehealth revolutionized  with ', highlight: 'Cosmicforge', description: 'Cosmicforge transforms telehealth, bringing advanced healthcare to your convenience.', image: require('../assets/man-chemist-checking-bottle-pills-chemistry-tools-working-late-medical-researching.jpg') }
];

const Onboarding = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Onboarding'>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: any[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlayContainer}>
              <View style={styles.pagination}>
                {slides.map((_, i) => (
                  <View key={i} style={[styles.dot, currentIndex === i && styles.activeDot]} />
                ))}
              </View>
              <Text style={styles.title}>{item.title}<Text style={styles.highlight}>{item.highlight}</Text></Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.buttonContainer}>
                {index < slides.length - 1 ? (
                  <>
                    <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
                      <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        if (flatListRef.current) {
                          flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
                        }
                      }}
                      style={styles.nextButton}
                    >
                      <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('GetStarted')}
                    style={[styles.nextButton, styles.getStartedButton]}
                  >
                    <Text style={styles.nextText}>Get Started</Text>
                    <AntDesign name="right" size={16} color="#FFFFFF" />
                    <AntDesign name="right" size={16} color="#ccc" />
                    <AntDesign name="right" size={16} color="#aaa" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    height,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 10,
    gap: 8
  },
  dot: {
    width: 25,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  activeDot: {
    backgroundColor: 'blue',
    width: 55,
    height: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  highlight: {
    color: colors.primary,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: '500'
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 6,
  },
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  getStartedButton: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
});
