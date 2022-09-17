import { ScrollView, StyleSheet, Alert, View, Text } from 'react-native'
import React, { useState } from 'react';
import { Input, Center, Box, Heading, VStack, FormControl, Button, Image } from 'native-base';
import { auth, createUserWithEmailAndPassword, userData, addDoc } from '../Config/firebase';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const [passShow, setPassShow] = useState(false);
    const [conPassShow, setConPassShow] = useState(false);

    const handleClickPassword = () => setPassShow(!passShow);
    const handleClickConPassword = () => setConPassShow(!conPassShow);

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [userConfirmPassword, setUserConfirmPassword] = useState('');

    const handleName = (e) => {
        setUserName(e);
    }
    const handleEmail = (e) => {
        setUserEmail(e);
    }
    const handlePassword = (e) => {
        setUserPassword(e);
    }
    const handleNumber = (e) => {
        setUserNumber(e);
    }
    const handleConfirmPassword = (e) => {
        setUserConfirmPassword(e);
    }

    const navigation = useNavigation()

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Error Confirm Password",
            "The two passwords that you entered do not match!",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    const onFinished = () => {
        // console.log('name=>', userName);
        // console.log('Email=>', userEmail);
        // console.log('password=>', userPassword);
        // console.log('conform=>', userConfirmPassword);
        // console.log('number=>', userNumber);
        // console.log('date of birth=>', userBirthdateDay);
        if (userPassword == userConfirmPassword) {
            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then((user) => {

                    console.log(userEmail);
                    const obj = {
                        Uid: user.user.uid,
                        Name: userName,
                        Email: userEmail,
                        Number: userNumber,
                        Password: userPassword,


                    }
                    addDoc(userData, obj).then(() => {
                            navigation.navigate('Home')
              
                    })
                        .catch((err) => {
                            alert(err)

                        });
                })
                .catch((error) => {
                    alert(error)

                });
        } else {
            createTwoButtonAlert()

        }

    }

    return (
        <ScrollView>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Center>
                        <Image source={require('../../assets/user.png')} alt="icon user" size="lg" />
                        <Heading mt="5" size="xl" color='primary.600' style={styles.SignUpContainer} >
                            Sign Up
                        </Heading>
                    </Center>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Enter Your Name</FormControl.Label>
                            <Input placeholder='Enter Your Name' onChangeText={(e) => { handleName(e) }} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Enter Your Email</FormControl.Label>
                            <Input placeholder='Enter Email Address' onChangeText={(e) => { handleEmail(e) }} />
                        </FormControl>

                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type={passShow ? "text" : "password"} onChangeText={(e) => { handlePassword(e) }} InputRightElement={<Button size="xs" rounded="none" w="1/5" h="full" onPress={handleClickPassword}>
                                {passShow ? "Hide" : "Show"}
                            </Button>} placeholder="Password" />
                        </FormControl>

                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type={conPassShow ? "text" : "password"} onChangeText={(e) => { handleConfirmPassword(e) }} InputRightElement={<Button size="xs" rounded="none" w="1/5" h="full" onPress={handleClickConPassword}>
                                {conPassShow ? "Hide" : "Show"}
                            </Button>} placeholder="Confirm Password" />
                        </FormControl>

                        <FormControl>
                            <FormControl.Label>Enter Your Phone Number</FormControl.Label>
                            <Input placeholder='Enter Your Phone Number' keyboardType='numeric' onChangeText={(e) => { handleNumber(e) }} />
                        </FormControl>



                        <Button mt="2" onPress={onFinished} bg="primary.600">
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center >
        </ScrollView>

    )
}

export default SignUp

const styles = StyleSheet.create({
    SignUpContainer: {
        // fontFamily: "nunito-regular"

    }
})