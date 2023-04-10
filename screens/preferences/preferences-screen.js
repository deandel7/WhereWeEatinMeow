import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const PreferencesScreen= () => {
    return (
        <View style={styles.screen}>
            <Text>This is preferences screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
export default PreferencesScreen;