import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import colors from "../components/colors";

const DoctorProfile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Doctor Header */}
      <View style={styles.header}>
        <Image source={require("../assets/doctorr.png")} style={styles.doctorImage} />
        <View style={styles.headerInfo}>
          <View style={styles.flex}>
            <Text style={styles.doctorName}>Dr. Josh Olawale</Text>
            <Text style={styles.specialty}>General Medicine</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call-outline" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoButton}>
          <Ionicons name="call-outline" size={20} color="white" />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>1,500+</Text>
          <Text style={styles.label}>Patients</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>3years+</Text>
          <Text style={styles.label}>Experience</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>4.7</Text>
          <Text style={styles.label}>Ratings</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Lagos, Ng</Text>
          <Text style={styles.label}>Location</Text>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Dr. Josh Olawale is a dedicated and compassionate doctor specializing in general medicine. With over 7 years of experience, he has helped numerous patients recover and maintain their health. He is known for his excellent diagnostic skills and patient-friendly approach.
        </Text>
      </View>

      {/* Working Hours */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Working Hours</Text>
        <View style={styles.hour}>
          <AntDesign name="calendar" size={18}/>
          <Text style={styles.text}>Mon - Fri</Text>
        </View>
        <View style={styles.clock}>
        <AntDesign name="clockcircleo" size={18}/>
        <Text style={styles.text}>9:00 AM - 5:00 PM</Text>
        </View>
      </View>

      {/* Pricing */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pricing</Text>
        <Text style={styles.text}>Consultation - ₦ 20,000.00</Text>
      </View>

      {/* Location Map */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 6.5244,
            longitude: 3.3792,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: 6.5244, longitude: 3.3792 }} />
        </MapView>
      </View>

      <View style={styles.earliestDateContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="calendar" color={colors.primary} size={22}/>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.earliestDateTitle}>Earliest Availability</Text>
          <Text style={styles.date}>December 10, 2024 - 12:00pm</Text>
        </View>
        <AntDesign name="right" size={17}/>
      </View>

      {/* Appointment Button */}
      <View style={styles.bookAppointmentContainer}>
        <TouchableOpacity style={styles.appointmentButton}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messagebubble}>
          <Ionicons name="calendar" size={24} color={colors.primary}/>
        </TouchableOpacity>
      </View>

      {/* Rate This Doctor */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rate this Doctor</Text>
        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, index) => (
            <FontAwesome key={index} name="star-o" size={32} color="#FFD700" />
          ))}
        </View>
        <Text style={styles.labelText}>Describe your experience (optional)</Text>
        <TextInput style={styles.reviewInput} placeholder="Write a review..." />
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>

      {/* Reviews Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <View style={styles.reviewCard}>
          <Image source={require('../assets/caller.png')} style={styles.avatar}/>
          <View style={styles.info}>
            <View style={styles.nameFlex}>
            <Text style={styles.reviewerName}>Janet Oyenemi</Text>
            <Text>3 sec ago</Text>
            </View>
            <Text style={styles.reviewText}>Dr. Josh is an excellent doctor, very kind and attentive.</Text>
          </View>
        </View>
        
        <View style={styles.reviewCard}>
          <Image source={require('../assets/caller.png')} style={styles.avatar}/>
          <View style={styles.info}>
            <View style={styles.nameFlex}>
            <Text style={styles.reviewerName}>Janet Oyenemi</Text>
            <Text>3 sec ago</Text>
            </View>
            <Text style={styles.reviewText}>Dr. Josh is an excellent doctor, very kind and attentive.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#f6f6f6",
  },
  doctorImage: {
    width: '100%',
    height: 250,
    paddingTop: 50,
  },
  headerInfo: {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  specialty: {
    fontSize: 14,
    color: "#f6f6f6",
  },
  stats: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  stat: {
    fontSize: 12,
    color: "#444",
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  rating: {
    fontSize: 12,
    color: "#444",
    marginLeft: 2,
  },
  location: {
    fontSize: 12,
    color: "#777",
  },
  callButton: {
    backgroundColor: colors.secondary,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 12
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    top: -30,
    gap: 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  bioText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  map: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  appointmentButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    margin: 20,
    padding: 15,
    borderRadius: 6,
    width: '80%',
    left: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  reviewButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  reviewButtonText: {
    color: "white",
    fontSize: 16,
  },
  reviewCard: {
    backgroundColor: "#f6f6f6",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: 'row'
  },
  reviewerName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  reviewText: {
    fontSize: 13,
    color: "#555",
    top: -10
  },
  flex:{
    flex:1,
  },
  videoButton:{
    backgroundColor: colors.secondary,
    marginLeft:10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 12
  },
  actionContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    flexWrap: "wrap",
    backgroundColor: '#fff',
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    top: -40,
    borderRadius: 8
  },
  textContainer:{
    alignItems: "center",
  },
  title:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  label:{
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  hour:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 1,
    gap: 10
  },
  clock:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 1,
    gap: 10
  },
  earliestDateContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    // ios elevation: 30
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer:{
    borderRadius: 5,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  earliestDateTitle:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  date:{
    fontSize: 14,
    color: "#777",
  },
  detailsContainer:{
    marginLeft: 1,
    width: '70%',
  },
  bookAppointmentContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  messagebubble:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    margin: 20,
    padding: 15,
    borderRadius: 8,
    left: -10
  },
  reviewInput:{
    backgroundColor: "#f6f6f6",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: "#ddd",
  },
  labelText:{
    fontSize: 14,
    color: "#000",
    marginTop: 10,
  },
  avatar:{
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 10
  },
  info:{
    flexDirection: "column",
    justifyContent: "space-between",
    width: '80%',
  },
  nameFlex:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    marginBottom: 5,
  }
});
