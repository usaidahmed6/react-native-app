import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react';
import { Input, Center, Box, VStack, FormControl, Link, Button, HStack, Text, Image, Heading } from 'native-base';
import { auth, signInWithEmailAndPassword } from '../Config/firebase';



const Login = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('');
    const [show, setShow] = React.useState(false);

    const handleClick = () => setShow(!show);

    const handleEmail = (e) => {
        setUserEmail(e);
    }
    const handlePassword = (e) => {
        setUserPassword(e);
    }

    const onFinished = () => {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(() => {
                navigation.navigate('Home')
            })
            .catch((error) => {
                console.log(error);

            });
    }
    return (

        <ScrollView >
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290" >

                        <Center>
                            <Image source={require('../../assets/user.png')} alt="icon user" size="lg" />
                            <Heading mt="5" size="xl" color='primary.600' style={styles.LoginContainer} >
                                Sign in
                            </Heading>
                        </Center>
                    <VStack space={3} mt="5">
                        <FormControl mt="2">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input placeholder='Email Address' onChangeText={(e) => { handleEmail(e) }} />
                        </FormControl>
                        <FormControl mt="2">
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type={show ? "text" : "password"} onChangeText={(e) => { handlePassword(e) }} w="100%" py="0" InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>} placeholder="Password" />
                        </FormControl>
                        <Button mt="2" onPress={onFinished} bg="primary.600">
                            Sign in
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                I'm a new user.{" "}
                            </Text>
                            <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => navigation.navigate('SignUp')}>
                                Sign Up
                            </Link>
                        </HStack>

                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    LoginContainer: {
        // fontFamily: "nunito-regular"
    }
})