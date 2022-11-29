import React from "react";
import { Image, Text, View } from "react-native";

const CardProfile = () => {
    return (
        <View
            style={{
                height: 135,
                width: 400,
                backgroundColor: "#fff",
                elevation: 10,
                marginHorizontal: 5,
                margin: 5,
                borderRadius: 25,
                flexDirection: "row",
            }}
        >
            <View>
                <Image
                    style={{
                        height: "100%",
                        width: 100,
                        borderRadius: 25,
                    }}
                    source={require("../../../../assets/image/homeScreen.jpg")}
                />
            </View>
            <View
                style={{
                    marginLeft: 10,
                    marginTop: 15,
                    flexDirection: "column",
                    alignItems:'center'
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Nama</Text>
                <Text style={{ fontSize: 15, fontWeight: "400", opacity: 0.5 }}>
                    email@email.com
                </Text>

                <View style={{ flexDirection: "row", marginTop: 3 }}>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "column",
                            padding: 10,
                            paddingHorizontal:15
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 15,
                                opacity: 0.5,
                            }}
                        >
                            Booking
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                color: "#3EBDC6",
                            }}
                        >
                            40
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "column",
                            padding: 10,
                            paddingHorizontal:15
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 15,
                                opacity: 0.5,
                            }}
                        >
                            Reviews
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                color: "#3EBDC6",
                            }}
                        >
                            40
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "column",
                            padding: 10,
                            paddingHorizontal:15
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 15,
                                opacity: 0.5,
                            }}
                        >
                            Favorites
                        </Text>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                color: "#3EBDC6",
                            }}
                        >
                            40
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CardProfile;
