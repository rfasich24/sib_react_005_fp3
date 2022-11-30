import { View, Text, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationTop } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { changeProfile, logout } from '../../redux/reducer/profileSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuScreen = () => {
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { width, height } = Dimensions.get('screen');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditable, setIsEditAble] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    setName(profile.login?.name ? profile.login?.name : null);
    setEmail(profile.login?.email ? profile.login?.email : null);
    setPhoneNumber(profile.login?.phoneNumber ? profile.login?.phoneNumber : null);
  }, [profile]);

  const HandleLogout = () => {
    dispatch(logout());
    setIsLogout(false);
  };

  const handleChangesProfile = () => {
    setIsEmpty(false);
    if (name === '' || email === '' || phoneNumber === '') {
      return setIsEmpty(true);
    }
    dispatch(changeProfile({ name: name, email: email, phoneNumber: phoneNumber }));
    setIsEditAble(false);
  };
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        <NavigationTop nameIcon="arrow-back" title="Setting" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 15 }}>
        <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10 }}>
          <View style={{ marginBottom: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}>PROFILE</Text>
          </View>
          <View style={{ paddingBottom: 5 }}>
            <Text style={{ padding: 4, fontWeight: '500' }}>Username</Text>
            <TextInput
              style={{
                width: '100%',
                height: 44,
                backgroundColor: isEditable ? '#F6F7F9' : '#f1f3f6',
                borderRadius: 6,
                paddingHorizontal: 10,
              }}
              onChangeText={(text) => setName(text)}
              value={name}
              defaultValue={name}
              placeholder="Fullname"
              editable={isEditable}
            />
          </View>
          <View style={{ paddingBottom: 5 }}>
            <Text style={{ padding: 4, fontWeight: '500' }}>Password</Text>
            <TextInput
              style={{
                width: '100%',
                height: 44,
                backgroundColor: isEditable ? '#F6F7F9' : '#f1f3f6',
                borderRadius: 6,
                paddingHorizontal: 10,
              }}
              onChangeText={(text) => setEmail(text)}
              value={email}
              defaultValue={email}
              placeholder="Email"
              editable={isEditable}
            />
          </View>
          <View style={{ paddingBottom: 5 }}>
            <Text style={{ padding: 4, fontWeight: '500' }}>Phone Number</Text>
            <TextInput
              style={{
                width: '100%',
                height: 44,
                backgroundColor: isEditable ? '#F6F7F9' : '#f1f3f6',
                borderRadius: 6,
                paddingHorizontal: 10,
              }}
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
              defaultValue={phoneNumber}
              placeholder="Phone Number"
              editable={isEditable}
            />
          </View>
          {isEmpty && (
            <View style={{ paddingBottom: 5 }}>
              <Text style={{ color: '#FF5A5A', fontWeight: '600', letterSpacing: 0.8 }}>Please Fill Out All Forms</Text>
            </View>
          )}

          {!isEditable && (
            <TouchableOpacity style={{ marginTop: 20, height: 40 }} onPress={() => (profile.login.email ? setIsEditAble(true) : navigation.navigate('LoginScreen'))}>
              <View style={{ paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#3EBDC6', width: 120, borderRadius: 18, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0 }}>
                <Text style={{ color: '#fff', fontWeight: '500' }}>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          )}
          {isEditable && (
            <TouchableOpacity style={{ marginTop: 20, height: 40 }} onPress={handleChangesProfile}>
              <View style={{ paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#3EBDC6', width: 150, borderRadius: 18, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0 }}>
                <Text style={{ color: '#fff', fontWeight: '500' }}>Save Changes</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10 }}>
          <View style={{ marginBottom: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}>SUPPORT</Text>
          </View>
          <View>
            {!profile.login?.email && (
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{ lineHeight: 24, fontSize: 16 }}>Login</Text>
              </TouchableOpacity>
            )}
            {profile.login?.email && (
              <TouchableOpacity onPress={() => setIsLogout(true)}>
                <Text style={{ lineHeight: 24, fontSize: 16 }}>Logout</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      {isLogout && (
        <View style={{ width: width, height: height, position: 'absolute', paddingHorizontal: 10, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center' }}>
          <View style={{ width: width - 30, minHeight: width / 2, borderRadius: 14, backgroundColor: '#fff', padding: 18, justifyContent: 'center', alignItems: 'center', top: height / 4 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="log-out-outline" size={50} color="#FF5A5A" />
              <Text style={{ fontWeight: '600', lineHeight: 30, letterSpacing: 1 }}>Are You Sure to Logout? </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setIsLogout((prevLogout) => !prevLogout)} style={{ marginRight: 10 }}>
                <View style={{ backgroundColor: '#FFBD09', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 28 }}>
                  <Text style={{ color: '#fff', fontWeight: '500' }}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={HandleLogout}>
                <View style={{ backgroundColor: '#3EBDC6', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 28 }}>
                  <Text style={{ color: '#fff', fontWeight: '500' }}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;
