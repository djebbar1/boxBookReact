import React, { useContext, useEffect, useState } from "react";
// import { Button, Text } from "react-native";
import { View } from "react-native";
import { useLocation, useNavigate } from "react-router-native";
import { UserContext } from "../UserContext";

export default function Api(props) {
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState([]);
  const { state } = useLocation();
  const [error, setError] = useState(false);
  
  const { dataUser, setDataUser } = useContext(UserContext);

  const login = async () => {
    try {
      const response = await fetch(
        "https://little-otters-worry-82-64-4-67.loca.lt/api/v1/user/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uuid: props.uuid,
          }),
        }
      );
        
      const data = await response.json();
      console.log(response);
      if (response.status === 201) {
          alert('erreur');
          navigate("/");
      }  if(response.status === 200){
        setDataUser(data);
        navigate("/profil", { state: { information: data } });
    }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return <View>{error ? alert("erreur") : null}</View>;
}
