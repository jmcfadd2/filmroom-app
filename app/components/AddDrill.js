import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import colors from '../config/colors'
import { getUserDrills, addDrillToSession } from '../redux/actions/sessionActions'
import AppButton from './Button'
import DrillCard from './DrillCard'
import Icon from './Icon'
import Screen from './Screen';
import AppText from './Text'

export default function AddDrill({ onPress, items }) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch()
  const userHandle = useSelector(state => state.user.credentials.handle)
  const topic = useSelector(state => state.session.topic)
  const type = useSelector(state => state.session.type)
  const sessionDrills = useSelector(state => state.session.drills)
  const userDrills = useSelector(state => state.session.yourDrills)


  return (
    <>

      <TouchableOpacity style={styles.container} onPress={() => {
        setModalVisible(true)
        dispatch(getUserDrills(userHandle, topic, type))
      }}>
        <Icon name='plus-circle' size={60} />
        <AppText style={styles.text}>Add Drills</AppText>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">

        <Screen>
          <Button title='cancel' onPress={() => {setModalVisible(false)}} />
          <View style={styles.drillContainer}>
            <AppText>Selected Drills</AppText>
            <FlatList
              horizontal
              data={sessionDrills}
              style={styles.drills}
              keyExtractor={(item, i) => i}
              renderItem={({ item, index }) => (
                <DrillCard 
                  key={item.drillId}
                  drill={item}
                />
              )}
            />
          </View>
          <View style={styles.drillContainer}>
            <AppText>Add Your Drills</AppText>
            <FlatList
              data={userDrills}
              style={styles.drills}
              keyExtractor={(item, i) => i}
              numColumns={2}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.drillChip}
                  onPress={() => dispatch(addDrillToSession(item.name))}
                >
                  <DrillCard
                    key={item.drillId}
                    drill={item}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <AppButton title='Add Drills to Workout' onPress={() => setModalVisible(false)}/>
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 200,
    padding: 10,
    paddingRight: 35,
    marginVertical: 20,
    backgroundColor: colors.accent,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.white
  },
  drills: {
    alignSelf: 'center'
  },
  drillContainer: {
    marginVertical: 15
  },
})
