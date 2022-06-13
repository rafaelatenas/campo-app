import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Image,Text } from 'react-native';
import theme from '../components/theme';

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
        setHidden('block')
    }

return (
    <View style={theme.containerLogin}>
        <StatusBar style='light'/>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={theme.pessable}>
                <Image source={require('../../landing/images/ats_logo-elise-blanca.png')}></Image>
            </View>
        </TouchableWithoutFeedback>
        <Text>Open up App.js to start workinga on your app!</Text>
        {/* {hidden ? 'Hidden' : 'Visible'}  */}
        <View style={{display:'none'}}>
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
    </View>
  );
}