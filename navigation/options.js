import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"

export const navOptions = (nav) => {
    return {
        headerTintColor: '#cbd5e1',
        headerStyle: {
            backgroundColor: "gray"
        },
        headerLeft: () => (
            <Ionicons
                name="menu"
                size={32}
                color="white"
                onPress={() => nav.toggleDrawer()}
            />
        ),
        headerRight: () => (
            <Text style={{color: 'white', fontSize:20, paddingRight:5}}>Profile</Text>
        )
    }
}