import React from "react";
import { Text, View, TextInput } from "react-native";

const InputData = () => {
    return (
        <View>
            <View style={{paddingBottom:5}}>
                <Text style={{ padding: 4, fontWeight: "500" }}>First Name</Text>
                <TextInput
                    style={{
                        width: "100%",
                        height: 44,
                        backgroundColor: "#f1f3f6",
                        borderRadius: 6,
                        paddingHorizontal: 10,
                    }}
                    placeholder={"Nama Orang"}
                    textContentType="name"
                />
            </View>
            <View style={{paddingBottom:5}}>
                <Text style={{ padding: 4, fontWeight: "500" }}>Last Name</Text>
                <TextInput
                    style={{
                        width: "100%",
                        height: 44,
                        backgroundColor: "#f1f3f6",
                        borderRadius: 6,
                        paddingHorizontal: 10,
                    }}
                    placeholder={"Nama Orang"}
                    textContentType="name"
                />
            </View>
            <View style={{paddingBottom:5}}>
                <Text style={{ padding: 4, fontWeight: "500" }}>Email</Text>
                <TextInput
                    style={{
                        width: "100%",
                        height: 44,
                        backgroundColor: "#f1f3f6",
                        borderRadius: 6,
                        paddingHorizontal: 10,
                    }}
                    placeholder={"Email"}
                    textContentType="emailAddress"
                    autoCapitalize="false"
                />
            </View>
        </View>
    );
};

export default InputData;
