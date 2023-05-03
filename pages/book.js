import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native'
// import React from 'react'
import { useLocation, useNavigate } from 'react-router-native'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main'
import QrCode from '../components/QrCode'
import React, { useState } from 'react'

const PlaceholderImage = require('../assets/images/box.jpg');

export default function Book() {
    const { state } = useLocation();
  
    console.log(state.book);
    const [infoBook, setInfoBook] = useState(false);
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-3);
        }

  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <Text style={styles.designText}>{state.book.Message}</Text>
        {/* <View style={styles.listecontainer} >
          <Text>Titre: {state.book?.title} </Text>
          <Text>Autheur: {state.book?.author}</Text>
          <Image source={{uri: "https://little-otters-worry-82-64-4-67.loca.lt/uploads/image/" + state.book?.cover}} style={{height: "60%", width:"60%"}}/>
        </View> */}
          <ImageBackground 
          contentFit="contain"
          style={styles.image}
          source={ PlaceholderImage }
        />
      <Button style={styles.designButton} onPress={goBack} title="Retour" />
    </View>
      {/* <Footer /> */}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: "red"
      }, 
      designButton: {
        // resizeMode: .8,
        zIndex: 1,
        position: 'absolute',
        bottom: 300,
        marginLeft: "35%",
    },
    designText: {
      // resizeMode: .8,
      position: 'absolute',
      top: 115,
      fontWeight: 'bold',
      marginLeft: '35%',
      zIndex: 1,
      color: 'white',
      fontSize: 15,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
imageContainer: {
    width: '100%',
     height: '100%',
    // paddingTop: 58,
  }, 
image: {
    width: 320,
    height: 557,
    // resizeMode: 'contain', 
  },

});