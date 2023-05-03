import { Button, StyleSheet, Text, View, Image } from 'react-native'
//import React from 'react'
import { useLocation, Route, Link, Routes, useNavigate } from 'react-router-native'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main'
import QrCode from '../components/QrCode'
import React, { useState } from 'react'
import ApiScanBox from '../components/ApiScanBox';

//import MapView from 'react-native-maps';

export default function Box() {
    
    const { state } = useLocation();
    const navigate = useNavigate();
    const goBack = () => {
      navigate("/home");
    }
    const [infoBox, setInfoBox] = useState(false);
    const handleBox = () => {
         navigate("/QrCodeScanBook");
    }
const PlaceholderImage = require('../assets/images/v.png');
  return (
    <View>
   
    <Text> Adresse de la box: { state.information.street} { state.information.zipcode} { state.information.city}</Text>

    <Button style={styles.designButton} onPress={handleBox} title="Emprunter livre" />
  <Button style={styles.designButton} onPress={goBack} title="Retour" />
    
    </View>
  )
}
const styles = StyleSheet.create({
    listecontainer: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
    imageContainer: {
        // flex: 1,
        //paddingTop: 58,
      }, 
    image: {
        width: 320,
        height: 600,
        resizeMode: 'contain',
      },
    designImage :{
      width: 200,
      height: 200,    
      },
        map: {
    width: '100%',
    height: '100%',
  },
  designButton: {
    resizeMode: .8,
    zIndex: 1,
    position: 'absolute',
    top: 0,
},
});