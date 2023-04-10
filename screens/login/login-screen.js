import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const LoginScreen = () => {
    const navigation = useNavigation()
    
    return (
        <View style={styles.screen}>
            <Text>This is the Login screen</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Preferences')}> 
                <Text style={{ color: 'white' }}>LOGIN MEOW</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Signup')}> 
                <Text style={{ color: 'white' }}>SIGN UP</Text> 
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
export default LoginScreen;