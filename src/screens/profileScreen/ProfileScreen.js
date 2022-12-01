import { View, Text, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card, NavigationTop } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { changeProfile, logout } from '../../redux/reducer/profileSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { width, height } = Dimensions.get('screen');

  useEffect(() => {
    if (!profile.login?.name) {
      navigation.navigate('LoginScreen');
    }
  }, [profile]);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 15 }}>
        <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Icon name="person-circle-outline" size={50} />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{profile.login?.name}</Text>
            <Text>{profile.login?.email}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, marginVertical: 10 }}>
          <View style={{ marginBottom: 6, minHeight: 200 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}>History Book</Text>
            <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
              {profile.historyBook.length > 0 ? (
                profile.historyBook?.map((book, index) => <Card item={book.item} key={index} />)
              ) : (
                <View style={{ minHeight: 200, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                  <Icon name="trash-bin-outline" size={30} />
                  <Text style={{ lineHeight: 30, fontWeight: '500' }}>No History Books</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
