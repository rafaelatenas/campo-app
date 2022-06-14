import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, View, TextInput, TouchableWithoutFeedback, Image,Text, Button } from 'react-native';
import theme from '../components/theme';
import { Modal } from 'react-native';

export default function Login() {
      
    const [Email, setEmail]=React.useState({
        email:'',
        emailValid:false
    });
    const [Password, setPassword]=React.useState({
        password:'',
        passwordValid:false
    });
    const [FormError, setFormError]=React.useState({
        password:'',
        email:'',
    });
    const [hidden, setHidden] = React.useState('none');
    const [modalVisible, setModalVisible] = React.useState(true);
    const validarEmail =(e)=>{
        let emailValid = Email.emailValid;
        emailValid = e.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        FormError.email = emailValid ? '':'es invalido'
        console.log(FormError.email)
    }
    const validarPassword=(e)=>{
        const password = Array.from(e)
        let passwordValid = Password.passwordValid;
        passwordValid = password.length >=6
        FormError.password = passwordValid ? '':'Coloque una clave mayor a 8 dígitos'
        console.log(FormError.password)
    }
    
    const handleInputEmail=(e)=>{
        setEmail({email:e})
        validarEmail(e)
    }
    const handleInputPassword=(e)=>{
        setPassword({password:e})
        validarPassword(e)
    }
    const onPress=()=>{
        setModalVisible(true)
    }


return (
    <View style={theme.containerLogin}>
        <StatusBar style='light'/>
            <Modal
                style={theme.ModalClaro}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                fullScreen={true}
            >
                <View style={theme.centeredViewModal}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide Modal</Text>
                    </Pressable>
                </View>
            </Modal>
            <View style={theme.ViewTextClaro}>
                <TextInput style={theme.input}
                    keyboardType="email-address"
                    autoCapitalize="none" autoCorrect={false}
                    onChangeText={handleInputEmail} value={Email.email
                    }
                />
                <TextInput style={theme.input}
                    onChangeText={handleInputPassword}
                    secureTextEntry={true}
                    value={Password.password}
                />
            </View>
        <Button style={theme.primaryButtons} onPress={onPress} title="Learn More"/>     
    </View>
  );
}{/*  */}