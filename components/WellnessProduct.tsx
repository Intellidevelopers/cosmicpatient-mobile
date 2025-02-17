import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import SectionHeader from './SectionHeader'
import ProductCard from './ProductCard'

const products = [
    {
        id: '1',
        title: 'Ibuprofen 400mg',
        tablet: '100 tablets',
        location: 'Lagos, Zenith Pharmacy',
        price: '3,500',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-1000x1000.jpg',
    },
    {
        id: '2',
        title: 'Ibuprofen tablets 400mg',
        tablet: '34 tablets',
        location: 'Lagos, Zenith Pharmacy',
        price: '3,500',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-1000x1000.jpg',
    },
    {
        id: '3',
        title: 'Lenovo Tab P12',
        tablet: '100 tablets',
        location: 'Lagos, Zenith Pharmacy',
        price: '3,500',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-1000x1000.jpg',
    },
];

const WellnessProduct = () => {
  return (
    <View style={styles.container}>
      <SectionHeader title='Wellness Products' more='View more' screenName='Products'/>
        <FlatList
            data={products.slice(0, 2)} // Show only 2 products
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard {...item} />}
            contentContainerStyle={styles.list}
            horizontal
        />
    </View>
  )
}

export default WellnessProduct

const styles = StyleSheet.create({
    container: {
    },
    list: {
        paddingBottom: 20,
        gap: 10,
        padding: 16,
        marginBottom: 55,
        top: -5

    },
})