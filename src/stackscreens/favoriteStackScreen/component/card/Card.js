import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Card({ item }) {
    const width = Dimensions.get("screen").width / 2 - 30;
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: "center" }}>
            <View
                style={{
                    height: 130,
                    width: 320,
                    backgroundColor: "#fff",
                    elevation: 5,
                    marginHorizontal: 5,
                    margin: 5,
                    borderRadius: 10,
                }}
            >
                <Image
                    style={{
                        height: 80,
                        width: "100%",
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                    }}
                    source={require("../../../../assets/image/homeScreen.jpg")}
                />
                <View style={{ padding: 5, flexDirection: "row" }}>
                    <View style={{flex:2}}>
                        <Text style={{ fontWeight: "500", fontSize: 15, marginLeft:2 }}>
                            Hotel
                        </Text>
                        <View style={{ paddingTop:2, flexDirection: "row"}}>
                            <Icon name="location" size={16} color="red" />
                            <Text style={{ fontSize: 11, marginLeft: 5, color:"#8f8f8f" }}>
                                Lokasi
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#3EBDC6",
                                marginRight:5,
                                textAlign:'left'
                            }}
                        >
                            $ 10.0
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "400",
                                marginRight:5,
                                opacity:0.5,
                                textAlign:'left'
                            }}
                        >
                            /Month
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
