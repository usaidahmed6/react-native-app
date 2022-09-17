import Header from "../component/header";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ScrollViewBase } from 'react-native';

import React, { useState } from 'react';
import { Avatar } from 'native-base';

const Home = () => {
  // const [text, setText] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

  return (
    <Header>
      <ScrollView>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.container}>
            <View style={styles.cardHeader} >
              <Avatar bg="#ddd" size="md" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>
                  usaid
                </Text>
                <Text style={styles.cardDate}>
                  date : 10 : 8 : 22
                </Text>
              </View>
            </View>

            <Image style={styles.image} source={require('../../assets/pic.jpg')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.container}>
            <View style={styles.cardHeader} >
              <Avatar bg="#ddd" size="md" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>
                  usaid
                </Text>
                <Text style={styles.cardDate}>
                  date : 10 : 8 : 22
                </Text>
              </View>
            </View>

            <Image style={styles.image} source={require('../../assets/pic.jpg')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.container}>
            <View style={styles.cardHeader} >
              <Avatar bg="#ddd" size="md" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>
                  usaid
                </Text>
                <Text style={styles.cardDate}>
                  date : 10 : 8 : 22
                </Text>
              </View>
            </View>

            <Image style={styles.image} source={require('../../assets/pic.jpg')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.container}>
            <View style={styles.cardHeader} >
              <Avatar bg="#ddd" size="md" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>
                  usaid
                </Text>
                <Text style={styles.cardDate}>
                  date : 10 : 8 : 22
                </Text>
              </View>
            </View>

            <Image style={styles.image} source={require('../../assets/pic.jpg')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.container}>
            <View style={styles.cardHeader} >
              <Avatar bg="#ddd" size="md" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>
                  usaid
                </Text>
                <Text style={styles.cardDate}>
                  date : 10 : 8 : 22
                </Text>
              </View>
            </View>

            <Image style={styles.image} source={require('../../assets/pic.jpg')} />
          </View>
        </TouchableOpacity>
        
      </ScrollView>
    </Header>
  )
}

export default Home

const styles = StyleSheet.create({

  cardHeader: {
    flexDirection: 'row',
    padding: 10

  },
  cardTitle: {
    fontSize: 16,
  },
  cardDate: {
    color: '#878786'
  },
  cardText: {
    marginLeft: 10
  },

  container: {
    width: '95%',
    padding: 5,
    marginTop: 20,
    margin: 10,
    height: 280,
    marginBottom: 25,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    overflow: 'hidden'
  },

  image: {
    width: '100%',
    height: '70%'
  },


  text: {
    fontWeight: 'bold',
    fontSize: 20
  },

})