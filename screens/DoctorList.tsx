import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Header from "../components/HeadersComponent/Header";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/navigation'; // Adjust the path if needed
import SearchBar from "../components/HeadersComponent/SearchBar";
import colors from "../components/colors";
import NearbyDoctors from "../components/NearbyDoctors";

const doctors = [
  {
    id: "1",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  {
    id: "2",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  {
    id: "3",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  {
    id: "4",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  {
    id: "5",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  {
    id: "6",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  {
    id: "7",
    name: "Dr Josh Olawale",
    specialty: "General Medicine",
    hospital: "Chatain Park Hospital",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    image: require("../assets/doctorr.png"),
    tag: "Top"
  },
  // Repeat similar objects for more doctors...
];


const DoctorList = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>>();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header title="General Medicine" onBackPress={() => navigation.goBack()} />

      {/* Search Input */}
      <SearchBar />

      {/* Tab Section */}
      <View style={styles.tabs}>
        {["All", "Top Rated", "Nearby"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditional Rendering */}
      {selectedTab === "Nearby" ? (
        <NearbyDoctors />
      ) : (
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.card} onPress={() => navigation.navigate('DoctorProfile')}>
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
            </Pressable>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default DoctorList;


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  filterIcon: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tabText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    padding: 10,
    width: 100,
    borderRadius: 5,
    backgroundColor: colors.light,
    borderWidth: 1,
    borderColor: "#eee",

  },
  activeTab: {
    fontWeight: "500",
    color: "#fff",
    backgroundColor: colors.primary,
  },
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
  tabButton:{
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 8,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
});
