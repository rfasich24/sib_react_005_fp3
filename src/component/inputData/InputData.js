import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/reducer/profileSlice';

const InputData = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setIsEmpty(false);
    setIsFailure(false);
    if (username === '' || password === '') {
      return setIsEmpty((prevEmpty) => !prevEmpty);
    }
    dispatch(loginUser({ username, password, redirect, notFound }));
  };

  const notFound = (status) => {
    if (status) {
      setIsFailure((prevFailure) => !prevFailure);
    }
  };

  const redirect = (status) => {
    if (status) {
      navigation.goBack();
    }
  };

  return (
    <View>
      <View style={{ paddingBottom: 5 }}>
        <Text style={{ padding: 4, fontWeight: '500' }}>Username</Text>
        <TextInput
          style={{
            width: '100%',
            height: 44,
            backgroundColor: '#f1f3f6',
            borderRadius: 6,
            paddingHorizontal: 10,
          }}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Username"
        />
      </View>
      <View style={{ paddingBottom: 5 }}>
        <Text style={{ padding: 4, fontWeight: '500' }}>Password</Text>
        <TextInput
          style={{
            width: '100%',
            height: 44,
            backgroundColor: '#f1f3f6',
            borderRadius: 6,
            paddingHorizontal: 10,
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
        />
      </View>

      {isEmpty && (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: '#FF5A5A', fontWeight: '600', letterSpacing: 0.8 }}>Please Fill Out All Forms</Text>
        </View>
      )}
      {isFailure && (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: '#FF5A5A', fontWeight: '600', letterSpacing: 0.8 }}>wrong username or password</Text>
        </View>
      )}

      <TouchableOpacity style={{ marginTop: 20 }} onPress={handleLogin}>
        <View style={{ paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#3EBDC6', width: 120, borderRadius: 18, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0 }}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputData;
