
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps/lib/MapView";
import { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Button } from "react-native";
import * as Location from "expo-location";
import { useLocation, useNavigate } from "react-router-native";

export default function Maps() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    }
    const [data, setData] = useState(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 45.1810309,
        longitude: 5.7497118,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
   useEffect(() => {
    const login = async () => {
          const response = await fetch(
            "https://little-otters-worry-82-64-4-67.loca.lt/api/box",
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
         const dataBox = await response.json();
          setData(dataBox);
        }
        login();
}, [])

    useEffect(() => {
        (async () => {
            let { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

const markers = data?.map((item) => {
    const coords = item.geoLoc["1"].split(",");
    return {
        coordinate: {
            latitude: parseFloat(coords[0]),
            longitude: parseFloat(coords[1]),
        },
        title: item.sreet,
        description: `${item.zipcode} ${item.city}`,
        id: item.id,
    };
});
    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={mapRegion}>
                {markers?.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
            
          <Button style={styles.designButton} onPress={goBack} title="Retour" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "94%",
    },
     designButton: {
        resizeMode: .8,
        zIndex: 1,
        position: 'absolute',
        top: 0,
    },
});