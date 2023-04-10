import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const SearchHistoryScreen= () => {
    return (
        <View style={styles.screen}>
            <Text>This is Search History screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
export default SearchHistoryScreen;