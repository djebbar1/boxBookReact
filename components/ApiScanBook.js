import React, { useContext, useEffect, useState } from "react";
// import { Button, Text } from "react-native";

import { useLocation, useNavigate } from "react-router-native";
import { UserContext } from "../UserContext";

export default function ApiScanBook(props) {
  const navigate = useNavigate();
  const { dataUser, setDataUser } = useContext(UserContext);

const {state} = useLocation();
const idBook = state.id

  const api = async () => {
    try {
      const response = await fetch(
        `https://little-otters-worry-82-64-4-67.loca.lt/api/v1/books/${idBook}/borrowBook`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: dataUser.id,
          }),
        })
      const data = await response.json();
      
      console.log(data);
      navigate('/Book', { state: { book: data } });

   
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    api();
  }, []);

  return null;
}
