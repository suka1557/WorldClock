import { Text, View } from "react-native";
import hometextstyles from "../styling/hometextstyle";

function HomePageMessage() {
    return (
        <View style={hometextstyles.container}>
            <Text style={hometextstyles.text}>
                This is a component to display text on bottom of the screen
            </Text>
        </View>
    );
}

export default HomePageMessage ;
