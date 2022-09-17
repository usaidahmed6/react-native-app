import React from "react";
import { NativeBaseProvider } from "native-base";
import NavigationStack from "./src/Config/NavigationStack";
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  return (
    <NativeBaseProvider>
      <NavigationStack />
    </NativeBaseProvider >
  );



}
const styles = StyleSheet.create({});
