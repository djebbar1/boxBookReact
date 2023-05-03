import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'react-router-native';

export default function Footer() {
  return (

    <View style={styles.listContainer}>
   {/* <Text>Footer</Text> */}
      <Link to="/search"><Ionicons name="md-search" style={styles.Ionicons}/></Link>
      <Ionicons name="md-mail" style={styles.Ionicons}/>
      <Link to="/Maps"><Ionicons name="md-map" style={styles.Ionicons}/></Link>
      <Ionicons name="md-list-circle" style={styles.Ionicons}/>
      <Ionicons name="md-person-add" style={styles.Ionicons}/> 
    </View>

  )
}

const styles = StyleSheet.create({
    
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    bottom:-30,
  },
  Ionicons :{
    color: "white",
    fontSize: 32,
  },

})