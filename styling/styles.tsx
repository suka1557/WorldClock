import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      flexDirection: "column",
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    hometextcontainer: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent:'space-around',
      paddingBottom: 2, // Adjust paddingBottom as needed
    },
    hometext: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    homeimagecontainer: {
      flex: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeimage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    locationpickercontainer: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default styles ;