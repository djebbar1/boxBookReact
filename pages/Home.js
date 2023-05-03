import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-native'
// import Main from '../components/Main'
// import Footer from '../components/Footer'
// import Header from '../components/Header'
import QrCode from '../components/QrCode'
// import Api from '../components/Api'
import ApiScanBox from '../components/ApiScanBox'
// import Search from './search';
import Api from '../components/Api';
// import Maps from './Maps'

export default function Home() {
  
    const [infoUser, setInfoUser] = useState(false);
    const [test, setTest] = useState(false);
    const handleQrcode = () => {
        setInfoUser(true);
    }
    const handletest = () => {
        setTest(true);
    }
    const PlaceholderImage = require('../assets/images/R.jpg');
    const navigate = useNavigate();
  return (
    <View>
      {/* <Header /> */}
      {/* <Main pageName="Page1"/> */}
      <Text style={styles.imane}>Bienvenue sur la boite à livres</Text> 
      <Text style={styles.imaner}>Une collection de livres vous attend</Text>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
           
          {infoUser ? <QrCode type="scanUser"/> : null}
          {test ? <Api uuid="3"/> : null}
         <ImageBackground 
          contentFit="contain"
          style={styles.image}
          source={ PlaceholderImage }
        /> 
        {/* <Search /> */}
        <Button style={styles.designButton} onPress={handleQrcode}title="connexion"/>
        <Button style={styles.designButton} onPress={handletest}title="click"/>
      </View>
        </View> 
        
        {/* <Link to="/Profil"> <Text>Maps</Text> </Link> */}
                  {/* <Text>Bienvenue sur l'application boite àn livre</Text>
                  <Text>Vous empruntez en vous connectant. </Text> */}
              {/*             
            {infoUser ? <QrCode type="scanUser"/> : null}
            {test ? <ApiScanBox id="3"/> : null} */}

      {/* <Footer /> */}
    </View>
  )
}

const styles = StyleSheet.create({
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
        width: 420,
        height: 522,
        // resizeMode: 'contain', 
      },
      imane:{
        position: 'absolute',
        top: 44,
        zIndex: 1,
        fontWeight: 'bold',
        marginLeft: '15%',
        fontSize: 16,
    },
      imaner:{
        position: 'absolute',
        top: 485,
        fontWeight: 'bold',
        marginLeft: '15%',
        zIndex: 1,
        color: 'white',
        fontSize: 15,
    },
    // designButton: {
    //     resizeMode: .8,
    // },
})