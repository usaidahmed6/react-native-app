import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';
import { Avatar } from 'native-base';


const Header = ({ children }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}  >

            <View style={styles.topHeader} bg="#f5f4f2">
                <Foundation name="indent-more" size={40} color="#fff" style={styles.moreOption} />
                <Avatar bg="#ddd" size="lg" style={styles.Avatar} source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }} />
            </View>



            {children}
        </View >
    )
}

export default Header


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomRightRadius: 180,
        backgroundImage: 'linear-gradient(90deg, #326b82, #982c92 )',
        height: 90

    },
    Avatar: {
        marginRight: 20
    },
    moreOption: {
        paddingTop: 5
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },

});
