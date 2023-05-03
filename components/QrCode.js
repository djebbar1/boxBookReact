import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigate } from 'react-router-native';
import Api from './Api';


import ApiScanBook from './ApiScanBook';
import ApiScanBox from './ApiScanBox';

export default function QrCode(props) {
const navigate = useNavigate();
console.log(props.type);
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
    setDonnes(data);

  };
 
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
        <BarCodeScanner style={styles.scan}
         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
       />
       {props.type == "scanUser" ? donnes && <Api uuid={donnes} /> : null}
       {props.type == "scanBox" ? donnes && <ApiScanBox  id={donnes} /> : null}
       {props.type == "scanBook" ? donnes && <ApiScanBook id={donnes} /> : null}
       {props.type == "scanMaps" ? donnes && <Maps id={donnes} /> : null}
       {/* {donnes && <Api uuid={donnes} />}
       {donnes && <ApiScanBox id={donnes} />} */}
       
    </View>
  )
}

const styles = StyleSheet.create({
    scan:{
        width:"100%",
        height: "100%",
        zIndex: 1,
    }
})