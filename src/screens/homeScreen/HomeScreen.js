import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, NavigationTop } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getHotel, getLocation } from '../../api/getApi';
import images from '../../assets/image';
import { detailHotel } from '../../constant/data';

export default function HomeScreen() {
  const [dataHotel, setDataHotel] = useState();
  const [isLoading, setIsloding] = useState(false);
  const [search, setSearch] = useState('');
  const height = (Dimensions.get('screen').height * 65) / 100;

  const handleSearch = () => {
    if (search !== '') {
      setIsloding(true);

      getLocation(search).then((res) => {
        getHotel({ locationId: res.locationId }).then((resHotel) => {
          setDataHotel(resHotel);
          setIsloding(false);
        });
      });
    }
  };

  useEffect(() => {
    setIsloding(true);
    if (!dataHotel) {
      getLocation(search).then((res) => {
        getHotel({ locationId: res.locationId }).then((resHotel) => {
          setDataHotel(resHotel);
        });
      });
    } else {
      setTimeout(() => {
        setIsloding((prev) => !prev);
      }, 2000);
    }
  }, [dataHotel]);
  return (
    <SafeAreaView>
      <View style={{ height: 180 }}>
        <ImageBackground source={images.homeScreen} resizeMode="cover" style={{ flex: 1, height: 300, paddingTop: 15, paddingHorizontal: 15 }}>
          <NavigationTop nameIcon="home" title="Home" colorTitle="#F1F5FE" />

          <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput onChangeText={(text) => setSearch(text)} value={search} placeholder="Search" style={{ flex: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, backgroundColor: '#fefefe', elevation: 2 }} />
            <TouchableOpacity onPress={handleSearch} style={{ backgroundColor: '#515778', padding: 8, borderRadius: 50, marginLeft: 10 }}>
              <Icon name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={{ paddingHorizontal: 15, paddingVertical: 25, backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40, overflow: 'hidden' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ minHeight: 500, paddingBottom: 360 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>Hotel {isLoading}</Text>
            {isLoading && (
              <View style={{ minHeight: height, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/image/logo.png')} style={{ width: 100, height: 100 }} />
                <Text>Loading</Text>
              </View>
            )}
            {!isLoading && (
              <View style={{ marginBottom: 6, minHeight: 200 }}>
                <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                  {dataHotel?.name ? (
                    dataHotel?.map((item, index) => <Card item={item} key={index} />)
                  ) : (
                    <View style={{ minHeight: height - 100, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                      <Icon name="home-outline" size={30} />
                      <Text style={{ lineHeight: 30, fontWeight: '500' }}>No Hotel Found</Text>
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
