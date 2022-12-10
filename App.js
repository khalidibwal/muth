import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './Route/MainStackNavigator';
import { ContextProv } from './Src/context/ContextProv';

export default function App() {
  const [myToken, setMyToken] = useState('')
  const [user, setUser] = useState('')
  const [mykelas,setMyKelas] = useState('')
  const [names,setNames] = useState('')
  const SyncData = {
    myToken, setMyToken,
    user, setUser,
    mykelas,setMyKelas,
    names,setNames
  }
  return (
    <ContextProv.Provider value={SyncData}>
    <MainStackNavigator />
    </ContextProv.Provider>
  );
}

