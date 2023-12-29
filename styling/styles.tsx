import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
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
      flex: 1,
      height: '10%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 10, // Adjust paddingBottom as needed
    },
    hometext: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    homeimagecontainer: {
      flex: 1,
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeimage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });

export default styles ;