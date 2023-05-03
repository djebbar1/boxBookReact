import { FlatList, SafeAreaView, StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native'
import React, {useState, useEffect } from 'react'
import { Button } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';

//const App=() =>{
    
export default function Search() {
    const [filterData, setFilterData]= useState(null);
    const [masterData, setmasterData] = useState({});
    
    const [filterDataBox, setFilterDataBox]= useState(null);
    const [search, setsearch] = useState('');
    const { state } = useLocation();
    const navigate = useNavigate();
    const goBack = () => {
          navigate(-1);
        }
    const PlaceholderImage = require('../assets/images/v.png');
    const fetchPosts = () =>{
        const apiUrl = `https://little-otters-worry-82-64-4-67.loca.lt/api/book/${search}`;
        fetch(apiUrl)
        .then((response) => response.json())
        .then((responseJson) =>{
            setFilterData(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    }
const fetchData = () =>{
    fetchPosts();

}
    console.log(filterData);

  return (
    <View style={{flex:1}}>
        <TextInput 
            style={styles.textInputStyles}
            value={search}
            placeholder='search here'
            onChangeText={setsearch}
        />
    <Button onPress={fetchData} title="Search"/>
   
    
    {filterData &&  <View style={{flex: 1, zIndex: 1}}> 
        <Text style={styles.design}>Livre: </Text><Text style={styles.designText}>Titre: {filterData.title} </Text>
          <Text style={styles.designText}>Auteur: {filterData.author}</Text>
          <Text style={styles.designText}>Résumé: {filterData.resume}</Text><Text style={styles.designText}>
         {filterData.isAvailable ? <View><Text style={styles.designText}>Disponibilité: Disponible</Text></View> : <Text style={styles.designText}>Disponibilité: Pas dispo</Text>}</Text>
         <Image source={{uri: "https://little-otters-worry-82-64-4-67.loca.lt/uploads/image/" + filterData.cover}} style={{height: "30%", width:"60%", marginLeft: 60, marginTop:30}} />
          {filterData &&  <View style={{flex: 1, zIndex: 1}}><Text style={styles.design}>Box: </Text>
          <Text style={styles.designText}>Adresse: {filterData.idBox?.street}</Text>
          <Text style={styles.designText}>Code postal: {filterData.idBox?.zipcode}</Text>
          <Text style={styles.designText}>Ville: {filterData.idBox?.city}</Text>
        </View> }
          </View> }
          

      

{/*       <Text>Code du live: {book.ibsn}</Text> */}
{/*       <Image style={styles.designImage}>{book.cover}</Image> */}

      
      {/* })} */}
      {/* <ImageBackground 
          contentFit="contain"
          style={styles.image}
          source={ PlaceholderImage }
        /> */}
      <Button style={styles.buttonRetour} onPress={goBack} title="Retour" />
     
    </View>

            
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        
      },
    imageContainer: {
        width: '100%',
        height: '100%',
        // paddingTop: 58,
      }, 
    image: {
        marginLeft: 40,
        width: 220,
        height: 322,
        resizeMode: 'contain', 
        zIndex: -1,
      },
    itemStyle: {
        padding: 15,
    },
    textInputStyles:{
        height:60,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        // backgroundColor: 'white',
    },
    designButton: {
        resizeMode: .8,
        zIndex: 1,
        position: 'absolute',
        top: 0,
    },
    buttonRetour: {
        resizeMode: .8,
        zIndex: 1,
        position: 'fixed',
        bottom: 0,
    },
    designText:
    {
        marginLeft: 90,
    
    },
    design:
    {
        marginTop:30,
        marginLeft: 60,
        fontWeight: 'bold'
    },


});