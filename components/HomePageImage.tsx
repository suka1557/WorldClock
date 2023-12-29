import { Image, View } from "react-native";
import styles from "../styling/styles";

const HomePageImage = () => {
    return (
        <View style={styles.homeimagecontainer}>
        <Image source={require('../assets/Clock.png')}
            // style={styles.homeimage}
        >

        </Image>
        </View>
    );
}

export default HomePageImage ;