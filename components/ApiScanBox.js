import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-native';
import QrCode from './QrCode';
import QrCodeScanBook from './QrCodeScanBook';

export default function ApiScanBox({id}) {
  const navigate = useNavigate();
  const [navBook, setNavBook ] = useState(false)
  const api = async () => {
    try {
      const response = await fetch(
        `https://little-otters-worry-82-64-4-67.loca.lt/api/box/${id}`,
      );
      const data = await response.json();
      navigate("/Box", {state: {information: data}} )
       
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => { 
    api();
  })
  return null
}

const styles = StyleSheet.create({
  scan:{
    width:"80%",
    height: "100%",
    marginLeft: 35,
    zIndex: 1,
    
},
})
