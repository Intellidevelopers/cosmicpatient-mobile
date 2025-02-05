import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/HeadersComponent/Header';

const specialistsData = [
    { id: '1', name: 'General Medicine', image: require('../assets/med.png') },
    { id: '2', name: 'Emergency Medicine', image: require('../assets/med.png') },
    { id: '3', name: 'Cardiology', image: require('../assets/cardiology.png') },
    { id: '4', name: 'Pediatrics', image: require('../assets/med.png') },
    { id: '5', name: 'Neurology', image: require('../assets/med.png') },
    { id: '6', name: 'Obstetrics and Gynecology', image: require('../assets/throath.png') },
    { id: '7', name: 'Dentistry', image: require('../assets/med.png') },
    { id: '8', name: 'Dermatology', image: require('../assets/med.png') },
    { id: '9', name: 'Psychiatry', image: require('../assets/med.png') },
    { id: '10', name: 'Oncology', image: require('../assets/med.png') },
    { id: '11', name: 'Urology', image: require('../assets/med.png') },
    { id: '12', name: 'Orthopedics', image: require('../assets/med.png') },
    { id: '13', name: 'Hematology', image: require('../assets/med.png') },
    { id: '14', name: 'Pulmonology', image: require('../assets/med.png') },
    { id: '15', name: 'Gastroenterology', image: require('../assets/med.png') },
];

const Specialists = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    // Filter specialists based on search input
    const filteredSpecialists = specialistsData.filter(specialist =>
        specialist.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Header title='Find a Specialist' onBackPress={() => navigation.goBack()}/>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <AntDesign name="search1" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search specialist..."
                    placeholderTextColor="#999"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            {/* Specialists List */}
            <FlatList
                data={filteredSpecialists}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                        <Image source={item.image} style={styles.icon} />
                        <Text style={styles.listItemText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Specialists;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 45,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    listItemText: {
        fontSize: 16,
        fontWeight: '500',
    },
});
