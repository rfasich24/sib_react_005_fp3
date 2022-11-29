import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

const InputData = () => {
    return (
        <View>
            <View style={{ paddingBottom: 15 }}>
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
                />
            </View>
            <View style={{ paddingBottom: 15 }}>
                <TextInput
                    style={{
                        width: "100%",
                        height: 44,
                        backgroundColor: "#f1f3f6",
                        borderRadius: 6,
                        paddingHorizontal: 10,
                    }}
                    placeholder={"Pssword"}
                    textContentType="password"
                />
            </View>
            <TouchableOpacity style={{ marginTop:30 , backgroundColor: '#3EBDC6', padding: 8, borderRadius: 50, alignItems:'center' }}>
                <Text style={{color:'#fff', fontWeight:'bold', fontSize:15}}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default InputData;
