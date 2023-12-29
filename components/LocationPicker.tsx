import React, { useState} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const LocationPicker = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);;

    const options = [
        { label: 'Delhi, India', value: 'delhi', color: 'red' },
        { label: 'New York, USA', value: 'newyork', color: 'blue' },
        { label: 'London, UK', value: 'london', color: 'green' },
        { label: 'Paris, France', value: 'paris', color: 'purple' },
        { label: 'Tokyo, Japan', value: 'tokyo', color: 'orange' },
        { label: 'Beijing, China', value: 'beijing', color: 'brown' },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleSelect = (value: string) => {
        console.log(`Selected location: ${value}`);
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
                onPress={() => handleSelect(option.label)}
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
  