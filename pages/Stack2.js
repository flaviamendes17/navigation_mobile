import React from "react";
import { View, Text } from "react-native";

export default function Stack2() {
    return (
        <View styles={styles.container}>
            <Text style={styles.title}>Página Stack</Text>
            </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
    },
    title: {
        fontSize: 30,
    },
};