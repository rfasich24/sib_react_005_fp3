import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import React from 'react';
import { NavigationTop } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';

const InformationScreen = () => {
  const { width, height } = Dimensions.get('screen');
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        <NavigationTop nameIcon="arrow-back" title="Information" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 15, minHeight: height, backgroundColor: '#FBFCFD' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/image/logo.png')} style={{ width: width / 2, height: 120, resizeMode: 'contain' }} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hotel App</Text>
            <Text style={{ fontStyle: 'italic' }}>Arrive as Guest, Leave as Friends</Text>
          </View>
        </View>

        <View style={{ marginBottom: 6, minHeight: 200 }}>
          <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: '#f5f5f5', marginTop: 12, width: width / 2 - 30, borderRadius: 10, overflow: 'hidden', elevation: 2 }}>
              <Image source={require('../../assets/image/Picture2.png')} style={{ width: width / 2 - 30, height: width / 2 - 30, resizeMode: 'contain', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
              <View style={{ padding: 8, justifyContent: 'space-between', flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', flex: 1, lineHeight: 24 }}>R. Fasich Aulia Pratama Iman (Lead)</Text>
                </View>
                <View style={{ paddingTop: 10, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 5 }}>
                    <Text style={{ fontSize: 12, marginLeft: 6 }}>RCTN-KS05-013</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: '#f5f5f5', marginTop: 12, width: width / 2 - 30, borderRadius: 10, overflow: 'hidden', elevation: 2 }}>
              <Image source={require('../../assets/image/Picture1.png')} style={{ width: width / 2 - 30, height: width / 2 - 30, resizeMode: 'contain', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
              <View style={{ padding: 8, justifyContent: 'space-between', flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', flex: 1, lineHeight: 24 }}>Almas Firdaus</Text>
                </View>
                <View style={{ paddingTop: 10, flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingRight: 5 }}>
                    <Text style={{ fontSize: 12, marginLeft: 6 }}>RCTN-KS05-017</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InformationScreen;
