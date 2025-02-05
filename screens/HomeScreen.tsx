import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import Header from '../components/Header'
import colors from '../components/colors';
import { AntDesign } from '@expo/vector-icons';
import ScrollCards from '../components/ScrollCards';
import SectionHeader from '../components/SectionHeader';
import Specialist from '../components/Specialist';
import WellnessProduct from '../components/WellnessProduct';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed


const HomeScreen = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>>();
  
  return (
    <View style={styles.container}>
        <Header/>
        <ScrollView>
        <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate('SearchScreen')}>
          <AntDesign name="search1" size={20} />
          <TextInput placeholder="Search for appointments" readOnly style={styles.input} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Image source={require('../assets/icons/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <ScrollCards/>
      <SectionHeader title='Find a Specialist' more='view more' screenName='Specialists'/>
      <Specialist/>
      <WellnessProduct/>
        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        paddingHorizontal: 10,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '84%',
        backgroundColor: '#fff',
      },
      input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        padding: 13
      },
      filter: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 46,
      },
      filterIcon: {
        width: 20,
        height: 20,
      },
      container:{
        backgroundColor: colors.background,
        flexGrow: 1
      }
})