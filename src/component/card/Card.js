import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { wishlistAdded } from '../../redux/reducer/profileSlice';

export default function Card({ item }) {
  const width = Dimensions.get('screen').width / 2 - 30;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailCard', { data: item })}>
      <View style={{ backgroundColor: '#f5f5f5', flex: 1, marginTop: 12, width: width, borderRadius: 10, overflow: 'hidden' }}>
        <Image source={{ uri: item.images?.original?.url }} style={{ width: width, height: 100, resizeMode: 'cover', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
        <View style={{ position: 'absolute', left: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#fff' }}>
            <Icon name="star" color="#FFBD09" />
            {item.hotel_class}
          </Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(wishlistAdded(item))} style={{ position: 'absolute', right: 10, top: 5, backgroundColor: 'rgba(255,255,255,0.2)', padding: 4, borderRadius: 50, elevation: 2 }}>
          <Icon name="heart-outline" color="#fff" size={16} />
        </TouchableOpacity>
        <View style={{ padding: 8, justifyContent: 'space-between', flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600', flex: 1, lineHeight: 24 }}>{item.name}</Text>
          </View>
          <View style={{ paddingTop: 10, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 5 }}>
              <Icon name="location" size={16} color="red" />
              <Text style={{ fontSize: 10, marginLeft: 6 }}>{item.location_string}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
