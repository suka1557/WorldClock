import { Text, View } from "react-native";
import styles from "../styling/styles";

function HomePageMessage() {
    return (
        <View style={styles.hometextcontainer}>
            <Text style={styles.hometext}> 
                This is a component to display text on bottom of the screen
            </Text>
        </View>
    );
}

export default HomePageMessage ;
