import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from './colors';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const doctors = [
    {
      id: "1",
      name: "Dr Josh Olawale",
      specialty: "General Medicine",
      hospital: "Chatain Park Hospital",
      location: "Lekki, Lagos Nigeria",
      rating: 4.5,
      image: require("../assets/doctorr.png"),
      tag: "Nearby"
    },
    {
      id: "2",
      name: "Dr Josh Olawale",
      specialty: "General Medicine",
      hospital: "Chatain Park Hospital",
      location: "Lekki, Lagos Nigeria",
      rating: 4.5,
      image: require("../assets/doctorr.png"),
      tag: "Nearby"
    },
    {
      id: "3",
      name: "Dr Josh Olawale",
      specialty: "General Medicine",
      hospital: "Chatain Park Hospital",
      location: "Lekki, Lagos Nigeria",
      rating: 4.5,
      image: require("../assets/doctorr.png"),
      tag: "Nearby"
    },
    // Repeat similar objects for more doctors...
  ];

const NearbyDoctors = () => {
  return (
    <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.doctorImage} />
              <Text style={styles.gag}>{item.tag}</Text>
              <View style={styles.cardInfo}>
                <View style={styles.flexHeader}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.rating}>
                    <MaterialIcons name="verified" size={16} color={colors.primary} />
                    <Ionicons name="star" size={16} color="gold" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.specialty}>{item.specialty}</Text>
                <Text style={styles.location}>{item.hospital}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
  )
}

export default NearbyDoctors

const styles = StyleSheet.create({
     card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
    gap: 5
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1
  },
  specialty: {
    color: "#555",
  },
  location: {
    color: "#555",
    fontSize: 12,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
  flexHeader:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  gag:{
    backgroundColor: colors.primary,
    color: '#fff',
    padding: 3,
    borderRadius: 5,
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    fontWeight: '500',
    position: 'absolute'
  }
})