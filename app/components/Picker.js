import React, { useState } from 'react'
import { Button, FlatList, Modal, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './Text'
import PickerItem from './PickerItem'
import Screen from './Screen'

export default function AppPicker({ icon, items, onSelectedItem, selectedItem, numberOfColumns, PickerItemComponent = PickerItem, placeholder, width = '100%' }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color='grey' style={styles.icon} />}
          {console.log(selectedItem)}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>)}

          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color='grey'

          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title='close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  onSelectedItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  textInput: {
    fontSize: 18,
    color: 'grey',
    fontFamily: Platform.OS == 'android' ? "Roboto" : 'Avenir'
  },
  icon: {
    margin: 10
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black'
  },
  placeholder: {
    flex: 1,
    color: 'grey',
    fontWeight: 'normal'
  }

})
