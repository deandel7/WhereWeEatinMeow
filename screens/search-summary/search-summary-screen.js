import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const SearchSummaryScreen= () => {
    return (
        <View style={styles.screen}>
            <Text>This is Search Summary screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})
export default SearchSummaryScreen;