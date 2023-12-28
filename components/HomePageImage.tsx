import { Image, View } from "react-native";
import imagestyles from "../styling/imagestyle";

const HomePageImage = () => {
    return (
        <View>
        <Image source={require('../assets/Clock.png')}
            // style={imagestyles.image}
        >

        </Image>
        </View>
    );
}

export default HomePageImage ;