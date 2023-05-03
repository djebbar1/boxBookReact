import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Api from './components/Api';
import QrCode from './components/QrCode';
import Home from './pages/Home';
import Profil from './pages/Profil';


import Search from './pages/search';
import Book from './pages/book';
import { UserProvider } from './UserContext';
import QrCodeScanBook from './components/QrCodeScanBook';
import ApiScanBook from './components/ApiScanBook';
import Maps from './pages/Maps';
import Box from './pages/box';
// import Search from './pages/search';

export default function App() {
  return (
    <UserProvider>
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Profil" element={<Profil />} />
        <Route exact path="/Api" element={<Api />} />
        <Route exact path="/QrCode" element={<QrCode />} /> 
        <Route exact path="/QrCodeScanBook" element={<QrCodeScanBook />} /> 
        <Route exact path="/Book" element={<Book />} />
        <Route exact path="/ApiScanBook" element={<ApiScanBook />} />
        <Route exact path="/Maps" element={<Maps />} />
       <Route exact path="/Search" element={<Search />} />
       
       <Route exact path="/Box" element={<Box />} />
      </Routes>
    </NativeRouter>
    </UserProvider>
  );
}

 
