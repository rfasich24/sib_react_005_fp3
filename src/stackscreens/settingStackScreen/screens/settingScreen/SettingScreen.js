import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    StyleSheet,
    TextInput,
} from "react-native";
import { InputData, NavigationTop } from "../../component";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../../../assets/image";
// import { Card } from "../../../favoriteStackScreen/component";

const SettingScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ height: 80 }}>
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
                    <View
                        style={{ alignItems: "center", paddingTop: 12 }}
                    ></View>
                </ImageBackground>
            </View>
            <View
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    overflow: "hidden",
                }}
            >
                <View
                    style={{
                        minHeight: 500,
                        paddingBottom: 360,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            paddingBottom: 10,
                            fontWeight: "bold",
                            fontSize: 18,
                        }}
                    >
                        Settings
                    </Text>
                    <View style={{ width: "100%", padding: 5 }}>
                        <InputData/>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    ></ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SettingScreen;
