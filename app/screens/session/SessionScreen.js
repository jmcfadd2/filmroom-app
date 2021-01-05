import * as Yup from 'yup'
import React, { Fragment, useEffect, useState } from 'react'
import { StyleSheet, View, Platform, Modal, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import AppForm from '../../components/forms/Form'
import Screen from '../../components/Screen'
import AddDrill from '../../components/AddDrill'
import { useDispatch, useSelector } from 'react-redux'
import { getTopicData, setSession, stageSession, getUserDrills, addNewDrill, setTopic, setType } from '../../redux/actions/sessionActions'

import colors from '../../config/colors'
import AppText from '../../components/Text';
import AppButton from '../../components/Button';
import routes from '../../navigation/routes';



export default function SessionScreen({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopicData())

  }, [])
  const topics = useSelector(state => state.session.topics)
  const session = useSelector(state => state.session)
  const userHandle = useSelector(state => state.user.credentials.handle)
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedType, setSelectedType] = useState();
  const [currentTopic, setCurrentTopic] = useState()
  const [sessionCreated, setSessionCreated] = useState(false);
  const [sessionStaged, setSessionStaged] = useState(false);


  const handleTopic = (topicName, index) => {
    dispatch(setTopic(topicName))
    setSelectedTopic(topicName)
    setCurrentTopic(index)
  };
  const handleType = (typeName) => {
    dispatch(setType(typeName))
    setSelectedType(typeName)
  };
  const handleStart = async () => {
    await dispatch(setSession({
      drills: session.drills,
      topic: session.topic,
      type: session.type
    }))
    navigation.navigate(routes.SESSION_STEP)
  };
  

  return (
    <Screen>
      {topics !== undefined &&

        <Picker
          selectedValue={selectedTopic}
          style={Platform.OS === 'android' ? styles.pickerContainer : null}
          itemStyle={styles.pickerContainer}
          onValueChange={(value, index) => handleTopic(value, index)}
        >
          {topics && topics.map((topic, index) => (
            <Picker.Item key={index} label={topic.name} value={topic.name} />
          ))}
        </Picker>


      }

      {currentTopic ?

        <Picker
          selectedValue={selectedType}
          style={Platform.OS === 'android' ? styles.pickerContainer : null}
          itemStyle={styles.pickerContainer}
          onValueChange={(value) => handleType(value)}
        >
          {currentTopic && topics[currentTopic].sessionTypes.map((type, index) => (
            <Picker.Item key={index} label={type} value={type} />
          ))}
        </Picker>
        : null
      }

      {session.type !== undefined && session.topic !== undefined &&
        <AddDrill onPress={() => dispatch(getUserDrills(userHandle, selectedTopic, selectedType))} />
      }

      <View>
        <FlatList
          horizontal
          data={session.drills}
          style={styles.drills}
          keyExtractor={(item, i) => i}
          renderItem={({ item, index }) => (
            <View style={styles.drillChip}>
              <AppText numberOfLines={1}>{(index + 1).toString()}. {item.name}</AppText>
            </View>
          )}
        />
      </View>

      {session.drills[1] !== undefined &&
        <AppButton
          title='Start session'
          style={styles.AppButton}
          onPress={handleStart}
        />
      }

    </Screen>
  )
}


const styles = StyleSheet.create({
  pickerContainer: {
    height: 50,
    backgroundColor: colors.grey,
    marginTop: 40,
    width: 250,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  drills: {
    alignSelf: 'center'
  },
  drillChip: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 15,

  }
})