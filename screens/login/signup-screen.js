
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SignupScreen= () => {
    
    const navigation = useNavigation()

    
    return (
        <View style={styles.screen}>
            <Text>This is the Signup screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}> 
                <Text style={{ color: 'white' }}>SIGN UP MEOW</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}> 
                <Text style={{ color: 'white' }}>BACK TO LOGIN</Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    btn: {
        padding: 10, 
        backgroundColor:'red', 
        width: 150, 
        height: 100, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
      }
})
export default SignupScreen;