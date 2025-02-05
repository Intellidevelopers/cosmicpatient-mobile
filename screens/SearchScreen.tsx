import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/HeadersComponent/Header';
import { AntDesign } from '@expo/vector-icons';
import colors from '../components/colors';

const features = [
    { id: '1', name: 'Run Diagnosis', icon: require('../assets/icons/Stethoscope.png') },
    { id: '2', name: 'Book Appointment', icon: require('../assets/icons/docandchild.png') },
    { id: '3', name: 'Find a Specialist', icon: require('../assets/icons/specialist.png') },
    { id: '4', name: 'QR Appointment', icon: require('../assets/icons/qr.png') },
    { id: '5', name: 'First Aid', icon: require('../assets/icons/firstaid.png') },
    { id: '6', name: 'Chat Bot', icon: require('../assets/icons/chatbot.png') },
    { id: '7', name: 'Shop', icon: require('../assets/icons/Shop.png') },
];

// Function to ensure the last row is properly aligned
const formatData = (data: any[], numColumns: number) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

    while (numberOfElementsLastRow !== 0 && numberOfElementsLastRow !== numColumns) {
        data.push({ id: `empty-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};

const SearchScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title="Search" onBackPress={() => navigation.goBack()} />

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.inputContainer}>
                    <AntDesign name="search1" size={20} />
                    <TextInput placeholder="Search here" style={styles.input} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filter}>
                    <Image source={require('../assets/icons/filter.png')} style={styles.filterIcon} />
                </TouchableOpacity>
            </View>

            {/* Grid of Features */}
            <FlatList
                data={formatData(features, 2)}
                numColumns={2}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.gridContainer}
                renderItem={({ item }) => {
                    if (item.empty) {
                        return <View style={[styles.card, styles.cardHidden]} />;
                    }
                    return (
                        <TouchableOpacity style={styles.card}>
                            <Image source={item.icon} style={styles.icon} />
                            <Text style={styles.cardText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    gridContainer: {
        paddingBottom: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        margin: 8,
        borderRadius: 10,
    },
    cardHidden: {
        backgroundColor: 'transparent',
        elevation: 0,
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
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
        padding: 13,
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
});
