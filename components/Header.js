import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <SafeAreaView>
        <View style={styles.nav}>
            <Text style={styles.textNav}>Header</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "red",
    },
    textNav: {
        
        backgroundColor: "red",
         margin: 30,
     }
})