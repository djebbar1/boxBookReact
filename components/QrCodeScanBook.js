import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigate } from 'react-router-native';
import Api from './Api';


import ApiScanBook from './ApiScanBook';
import ApiScanBox from './ApiScanBox';

export default function QrCodeScanBook(props) {
    const handleTrue = () => {
        setScanned(false)
    }
const goBack = () => {
        navigate(-3);
}
const navigate = useNavigate();

const [donnes, setDonnes] = useState(null);
const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data}) => {
    setScanned(true);

    navigate("/ApiScanBook", {state: {id: data}})
  };
 
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
     
        
        <BarCodeScanner style={styles.scan}
         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
       />
       {scanned ? null :  <Button style={styles.designButton} title='Scan Livre' onPress={handleTrue}/>}
       <Button style={styles.designButton} onPress={goBack} title="Retour" />
       {/* {props.type == "scanBook" ? donnes && <ApiScanBook id={donnes} /> : null} */}
    
    </View>
  )
}

const styles = StyleSheet.create({
container: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#f3f5da',
        
      },
      designButton:{
        position: 'fixed',
        top: 0,
      },
      scan:{
        width:"100%",
        height: "100%",
        zIndex: 1,
    }
})