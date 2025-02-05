import { StyleSheet, View, Image, ScrollView, Text } from 'react-native'
import React from 'react'
import colors from './colors'

const Specialist = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.optionContainer}>
          <Image source={require('../assets/skelet.png')} style={styles.image}/>
          <Text style={styles.label}>General Med</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image source={require('../assets/med.png')} style={styles.image}/>
          <Text style={styles.label}>Emmergency Med</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image source={require('../assets/cardiology.png')} style={styles.image}/>
          <Text style={styles.label}>Cardiology</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image source={require('../assets/throath.png')} style={styles.image}/>
          <Text style={styles.label}>Pediatrics</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image source={require('../assets/test.png')} style={styles.image}/>
          <Text style={styles.label}>Neurology</Text>
        </View>
      </ScrollView>

      <View style={styles.QuicActionContainer}>
        <View style={styles.actionContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/skelet.png')} style={styles.quickImage}/>
          </View>
          <Text style={styles.label}>Book Appointment</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/firstaid.png')} style={styles.quickImage}/>
          </View>
          <Text style={styles.label}>First Aid</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icons/Stethoscope.png')} style={styles.quickImage}/>
          </View>
          <Text style={styles.label}>Run a Diagnosis</Text>
        </View>
      </View>
    </View>
  )
}
export default Specialist

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
    gap: 12,
  },
  optionContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  QuicActionContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 15,

  },
  actionContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 10,
    gap: 10
  },
  quickImage: {
    width: 30,
    height:30,
    resizeMode: 'contain',
  },
  iconContainer:{
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label:{
    fontSize: 13,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '500'
  }
  
})