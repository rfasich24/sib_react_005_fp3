import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Dimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationTop } from '../../component';
import { bookingAdded } from '../../redux/reducer/profileSlice';

export default function BookingScreen({ route }) {
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState(profile?.login?.name);
  const [email, setEmail] = useState(profile?.login?.email);
  const [phoneNumber, setPhoneNumber] = useState(profile?.login?.phoneNumber);
  const [guest, setGuest] = useState();
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isBookSuccess, setIsBookSuccess] = useState(false);
  const { width, height } = Dimensions.get('screen');
  let item = route.params.data;

  const handleBook = () => {
    if (name === '' || email === '' || phoneNumber === '' || guest === '' || days === '') {
      setIsEmpty((prevEmpty) => !prevEmpty);
      return;
    }
    dispatch(bookingAdded({ item, detailBook: { name: name, email: email, phoneNumber: phoneNumber, guest: guest, days: days, total: total } }));
    setIsBookSuccess((prevSuccess) => !prevSuccess);
  };

  useEffect(() => {
    if (profile.login.length === 0) {
      return navigation.goBack();
    }
    setTotal(item.price * days);
  }, [name, email, phoneNumber, guest, days, total, profile]);
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15, backgroundColor: '#F6F7F9' }}>
      <ScrollView style={{ position: 'relative' }}>
        <NavigationTop nameIcon="chevron-back" title="Booking" />
        <View style={{ justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, letterSpacing: 0.5, lineHeight: 26, marginBottom: 10 }}>Contact Informations</Text>
            <View style={{ marginTop: 4 }}>
              <Text style={{ marginBottom: 2, fontWeight: '400' }}>Name :</Text>
              <TextInput
                onChangeText={(text) => setName(text)}
                autoComplete="name"
                value={name}
                defaultValue={profile.login.name}
                placeholder="Name"
                style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2, marginBottom: 4 }}
              />
            </View>
            <View style={{ marginTop: 4 }}>
              <Text style={{ marginBottom: 2, fontWeight: '400' }}>Email :</Text>

              <TextInput
                onChangeText={(text) => setEmail(text)}
                autoComplete="email"
                keyboardType="email-address"
                value={email}
                placeholder="Email"
                style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2, marginBottom: 4 }}
              />
            </View>
            <View style={{ marginTop: 4 }}>
              <Text style={{ marginBottom: 2, fontWeight: '400' }}>Phone Number :</Text>

              <TextInput
                onChangeText={(text) => setPhoneNumber(text)}
                autoComplete="tel"
                keyboardType="numeric"
                value={phoneNumber}
                placeholder="Phone Number"
                style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2, marginBottom: 4 }}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginVertical: 16 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, letterSpacing: 0.5, lineHeight: 26, marginBottom: 10 }}>Booking Details</Text>
            <View style={{ marginTop: 4 }}>
              <Text style={{ marginBottom: 2, fontWeight: '400' }}>Guest :</Text>

              <TextInput
                onChangeText={(text) => setGuest(text)}
                value={guest}
                placeholder="1 guest"
                style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2, marginBottom: 4 }}
              />
            </View>
            <View style={{ marginTop: 4 }}>
              <Text style={{ marginBottom: 2, fontWeight: '400' }}>Days :</Text>

              <TextInput
                onChangeText={(text) => setDays(text)}
                value={days}
                placeholder=" 1 days"
                style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2, marginBottom: 4 }}
              />
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ marginBottom: 2, fontWeight: 'bold', fontSize: 20, lineHeight: 28 }}>Total :</Text>
              <View style={{ minHeight: 30, backgroundColor: '#fff', borderRadius: 12, elevation: 3, paddingHorizontal: 20, paddingVertical: 10, flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: '600', fontSize: 16 }}>$ {total}</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={handleBook} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3EBDC6', padding: 12, borderRadius: 20 }}>
            <Text style={{ fontWeight: '600', letterSpacing: 1.5, lineHeight: 28 }}>Continue Book</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isBookSuccess && (
        <View style={{ width: width, height: height, position: 'absolute', paddingHorizontal: 10, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center' }}>
          <View style={{ width: width - 30, minHeight: width / 2, borderRadius: 14, backgroundColor: '#fff', padding: 18, justifyContent: 'center', alignItems: 'center', top: height / 4 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="checkmark-circle-outline" size={50} color="#9FA4B8" />
              <Text style={{ fontWeight: '600', lineHeight: 30, letterSpacing: 1 }}>Success</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <View style={{ backgroundColor: '#3EBDC6', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 28 }}>
                <Text style={{ color: '#fff', fontWeight: '500' }}>Back to Home</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {isEmpty && (
        <View style={{ width: width, height: height, position: 'absolute', paddingHorizontal: 10, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center' }}>
          <View style={{ width: width - 30, minHeight: width / 2, borderRadius: 14, backgroundColor: '#fff', padding: 18, justifyContent: 'center', alignItems: 'center', top: height / 4 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="alert-circle-outline" size={50} color="#FF5A5A" />
              <Text style={{ fontWeight: '600', lineHeight: 30, letterSpacing: 1 }}>Please Fill Out All Forms! </Text>
            </View>
            <TouchableOpacity onPress={() => setIsEmpty((prevEmpty) => !prevEmpty)}>
              <View style={{ backgroundColor: '#3EBDC6', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 28 }}>
                <Text style={{ color: '#fff', fontWeight: '500' }}>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
