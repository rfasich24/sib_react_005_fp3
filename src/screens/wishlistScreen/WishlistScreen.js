import { View, Text, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import images from '../../assets/image';
import { Card, NavigationTop } from '../../component';
import Icon from 'react-native-vector-icons/Ionicons';

const WishlistScreen = () => {
  const profile = useSelector((store) => store.profile);
  const { height } = Dimensions.get('screen');
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
          minHeight: height,
          paddingHorizontal: 15,
          paddingVertical: 25,
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          overflow: 'hidden',
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 6, minHeight: 200 }}>
            <View style={{ marginVertical: 15, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
              {profile.wishlist.length > 0 ? (
                profile.wishlist?.map((item, index) => <Card item={item} key={index} />)
              ) : (
                <View style={{ minHeight: height / 2, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                  <Icon name="heart-dislike-outline" size={30} />
                  <Text style={{ lineHeight: 30, fontWeight: '500' }}>No Wishlist</Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;
