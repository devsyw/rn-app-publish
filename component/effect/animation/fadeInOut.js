import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Image, Button, SafeAreaView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MapIcon_Finance = require('../../../assets/icon/MainMapMyPlaceBtn.png')

const FadeInOut = ({navigation, route, options, back}) => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                styles.fadingContainer,
                {
                    opacity: fadeAnim
                }
                ]}
            >
                <TouchableOpacity
                    onPress={()=>Alert.alert('누름')}
                >
                    <Image source={MapIcon_Finance}/>
                </TouchableOpacity>
            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Fade In View" onPress={fadeIn} />
                <Button title="Fade Out View" onPress={fadeOut} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        padding: 20,
        //backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});

export default FadeInOut;