import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { Card, NavigationTop } from '../../stackscreens/favoriteStackScreen/component';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/image';

const FavoriteScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ height: 130 }}>
        <ImageBackground
          source={images.homeScreen}
          resizeMode="cover"
          style={{
            flex: 1,
            height: 300,
            paddingTop: 15,
            paddingHorizontal: 15,
          }}
        >
          <NavigationTop nameIcon="home" title="Home" colorTitle="#F1F5FE" />
          <View style={{ alignItems: 'center', paddingTop: 10 }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 35,
                color: '#fff',
                textShadowColor: 'rgba(0, 0, 0, 0.55)',
                textShadowOffset: { width: -3, height: 3 },
                textShadowRadius: 25,
              }}
            >
              Bookmark Hotel
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 25,
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: 'hidden',
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ minHeight: 500, paddingBottom: 360 }}>
            <Card />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
