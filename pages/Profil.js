import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native'

// import React from 'react'
import { useLocation, useNavigate } from 'react-router-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import QrCode from '../components/QrCode'


import React, { useState } from 'react'

//import React, { useEffect, useState } from "react";

const PlaceholderImage = require('../assets/images/bat.jpg');

export default function Profil() {
    
    const [infoUser, setInfoUser] = useState(false);
    const { state } = useLocation();
    console.log(state.information);
    const handleQrcode = () => {
        setInfoUser(true);
    }
    const [infoBox, setInfoBox] = useState(false);
    const handleBox = () => {
         setInfoBox(true);
    }
    // const [infoMaps, setInfoMaps] = useState(false);
    // const handleMaps = () => {
    //       setInfoMaps(true);
    //  }
    //    const [infoBook, setInfoBook] = useState(false);
    // const handleBook = () => {
    //       setInfoBook(true);
    //  }
    const navigate = useNavigate();
  return (
   
    <View style={styles.container}>
      
{/*       
      <Text>bonjour {state.information.name}</Text> */}
        {infoBox ? <QrCode type="scanBox" /> : null}
         {/* {infoBook ? <QrCode type="scanBook"/> : null} */}
      
         <ImageBackground 
          contentFit="contain"
          style={styles.image}
          source={ PlaceholderImage }
        />  
        
          <Button style={styles.footer} onPress={handleBox} title="Scanner Box" />  
         {/* <Button  style={styles.designButton} onPress={handleBook} title="Scanner Book"  /> */}
         
         <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#0796be',
      // flex: 1,
      },
    imageContainer: {
      width: '100%',
      height: '100%',
        // paddingTop: 58,
      }, 
    image: {
      width: 420,
      height: 522,
        // resizeMode: 'contain', 
      },
    designButton: {
      resizeMode: .8,
      zIndex: 1,
      },
    designText: {
      position: 'absolute',
      top: 520,
      zIndex: 1,
      fontWeight: 'bold',
      marginLeft: '25%',
      },

})