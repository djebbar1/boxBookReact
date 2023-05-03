
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import QrCode from "./QrCode";
export default function Main(props) {
    let content = null;

  
    if (props.pageName === "Page1") {
      content = (
        <View style={styles.container}>
          <Text>Bonjour Homme</Text>
        </View>
      );
    } else if (props.pageName === "Page2") {
      content = (
        <View>
          <Text>Contenu de la page 2</Text>
        </View>
      );
    } else if (props.pageName === "Page3") {
        content = (
          <View>
            <Text>Contenu de la page 3</Text>
          </View>
        );
        }else if (props.pageName === "Page4") {
            content = (
              <View>
                <Text>Contenu de la page 4</Text>
              </View>
            );
        }
    return <View style={styles.main}>{content}</View>;
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: "white",
    },
    container: {
        flex: 1,
        backgroundColor: "blue",
    },
  });