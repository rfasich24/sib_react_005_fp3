import { View, Text, ImageBackground, Image } from 'react-native';
import { InputData } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/image';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const profile = useSelector((store) => store.profile);
  const navigation = useNavigation();

  useEffect(() => {
    if (profile.login?.email) {
      return navigation.goBack();
    }
  });
  return (
    <SafeAreaView>
      <View style={{ height: 320 }}>
        <ImageBackground
          source={images.homeScreen}
          resizeMode="cover"
          style={{
            flex: 1,
            height: 500,
            paddingTop: 15,
            paddingHorizontal: 15,
          }}
        >
          <View style={{ alignItems: 'center', paddingTop: 1 }}>
            <Image style={{ width: 350, height: 350 }} source={require('../../assets/image/afsplash.png')} />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            minHeight: 500,
            paddingBottom: 360,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              paddingBottom: 15,
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            Login
          </Text>
          <View style={{ width: '100%', padding: 5 }}>
            <InputData />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
