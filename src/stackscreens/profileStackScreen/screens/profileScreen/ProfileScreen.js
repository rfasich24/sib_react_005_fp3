import { View, Text, ImageBackground, ScrollView } from "react-native";
import { CardProfile, NavigationTop } from "../../component";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../../../assets/image";
import { Card } from "../../../favoriteStackScreen/component";

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ height: 230 }}>
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
                    <NavigationTop
                        nameIcon="home"
                        title="Home"
                        colorTitle="#F1F5FE"
                    />
                    <View style={{ alignItems: "center", paddingTop: 12 }}>
                        <CardProfile/>
                    </View>
                </ImageBackground>
            </View>
            <View
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: 25,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    overflow: "hidden",
                }}
            >
                    <View style={{ minHeight: 500, paddingBottom: 360, alignItems:'center' }}>
                        <Text style={{paddingBottom:10, fontWeight:'bold', fontSize:15 }}>History Books</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                </ScrollView>
                    </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
