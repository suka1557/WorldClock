import React, { useState} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { GetTimeatLocation } from './GetTimefromWorldClock';


const LocationPicker = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);;

    const options = [
        { label: 'Delhi, India', value: 'Asia/Kolkata', color: 'red' },
        { label: 'New York, USA', value: 'America/New_York', color: 'blue' },
        { label: 'London, UK', value: 'Europe/London', color: 'green' },
        { label: 'Paris, France', value: 'Europe/Paris', color: 'purple' },
        { label: 'Tokyo, Japan', value: 'Asia/Tokyo', color: 'orange' },
        { label: 'Shanghai, China', value: 'Asia/Shanghai', color: 'brown' },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleSelect = (cityname: string, timezone: string) => {
        console.log(`Selected location: ${cityname}`);
        GetTimeatLocation(timezone);

        // Reset the button state back to null
        setSelectedValue(null);
        toggleModal();
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={{ color: selectedValue ? 'black' : 'gray' }}>
          {selectedValue ? selectedValue : 'Select Location'}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[styles.option, { backgroundColor: option.color }]}
                onPress={() => handleSelect(option.label, option.value)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 200,
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
    },
    option: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
    },
    optionText: {
      color: 'white',
    },
  });

export default LocationPicker;
  