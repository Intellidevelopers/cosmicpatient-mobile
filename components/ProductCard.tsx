import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from './colors';

interface ProductCardProps {
    title: string;
    tablet: string;
    location: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, tablet, location, price, image }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomeTab'>>();

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                    <Ionicons name="heart-outline" size={18} color={colors.primary} style={styles.cartIcon} />
                </View>

                <Text style={styles.subTitle}>{tablet}</Text>
                <Text style={styles.location}>{location}</Text>
                <View style={styles.bottomSection}>
                    <Text style={styles.price}>N{price}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('ProductDetails')}
                    >
                        <Ionicons name="cart-outline" size={18} color="#fff" style={styles.cartIcon} />
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: 180, 
        height: 250, 
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    detailsContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1
    },
    subTitle: {
        fontSize: 13,
        color: '#000',
        marginBottom: 2,
        fontWeight: '500'
    },
    location: {
        fontSize: 13,
        color: '#555',
        marginBottom: 5,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
        flex: 1
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 11,
        marginLeft: 2,
    },
    cartIcon: {
        marginBottom: -2, 
    },
    titleRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 5,
        width: '100%',
        maxWidth: 150,
    }
});
