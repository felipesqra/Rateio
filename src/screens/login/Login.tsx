import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {login} from '../../../backend/user-config/user-service';
import styles from '../login/LoginStyles';
import {useUserStore} from '../../store/user';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    const {setPersonalData} = useUserStore();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        if (email.trim() === '' || password === '') {
            alert('Please enter both email and password.');
            return;
        }

        setLoading(true);

        try {
            const response = await login(email, password);
            console.log(response.uid)
            if (!response.uid) {
                alert('Ocorreu um erro ao fazer login. Por favor verifique email e senha.');
            } else {
                setPersonalData(response.user);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            {name: 'Home', params: {uid: response.uid}},
                        ],
                    })
                );
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSignUpPress = () => {
        navigation.navigate('SignUp'); // Navigate to SignUp screen
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.welcome}>O melhor app para dividir gastos com seus amigos.</Text>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#1CC29F" style={styles.icon}/>
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={styles.placeholderText.color}
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#1CC29F" style={styles.icon}/>
                <TextInput
                    value={password}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={styles.placeholderText.color}
                    autoCapitalize="none"
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            {loading ? (
                <ActivityIndicator size={'large'} color="#1CC29F"/>
            ) : (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={signIn} style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <View style={styles.greenSeparator}/>
                    <TouchableOpacity onPress={handleSignUpPress} style={styles.buttonTwo}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Login;
