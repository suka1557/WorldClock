import { ScrollView, View, StatusBar, Text } from "react-native";
import styles from "../styling/styles";

const HomePage = () => {
    return (
        <ScrollView style={styles.sectionContainer}>
            <View>
                <Text>Hello World from React Native</Text>
            </View>
        </ScrollView>
    );
}

export default HomePage ;