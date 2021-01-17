import * as Yup from 'yup'
import React, { Fragment, useEffect, useState } from 'react'
import { StyleSheet, View, Platform, Modal, FlatList, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import AppForm from '../../components/forms/Form'
import Screen from '../../components/Screen'
import AddDrill from '../../components/AddDrill'
import { useDispatch, useSelector } from 'react-redux'
import { getTopicData, setSession, stageSession, getUserDrills, addNewDrill, setTopic, setType } from '../../redux/actions/sessionActions'
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../config/colors'
import AppText from '../../components/Text';
import AppButton from '../../components/Button';
import routes from '../../navigation/routes';
import AppFormPicker from '../../components/forms/FormPicker';
import DrillCard from '../../components/DrillCard';



export default function SessionScreen({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopicData())

  }, [])
  const topics = useSelector(state => state.session.topics)
  const session = useSelector(state => state.session)
  const userHandle = useSelector(state => state.user.credentials.handle)
  const [currentTopic, setCurrentTopic] = useState()
  const [sessionCreated, setSessionCreated] = useState(false);
  const [sessionStaged, setSessionStaged] = useState(false);


  const handleTopic = (topicName, index) => {
    dispatch(setTopic(topicName))
    setCurrentTopic(index)
    console.log(currentTopic);
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

  const makeMenuItems = (items, label, value) => {
    let menuItems = []
    items.forEach((item, index) => {
      const menuItem = { 
        label: label ? item[label] : item, 
        value: value ? item[value] : item, 
        key: index 
      }
      menuItems.push(menuItem)
    })
    return menuItems
  }

  return (
    <Screen>

      {topics !== undefined &&
        <RNPickerSelect
          onValueChange={(value, index) => handleTopic(value, index-1)}
          items={makeMenuItems(topics, 'name', 'name')}
          placeholder={{label: 'Choose Your Sport...'}}
          style={{ ...pickerSelectStyles }}
        />
      }
      {session.topic !== undefined && currentTopic !== undefined &&
        <RNPickerSelect
          onValueChange={(value) => dispatch(setType(value))}
          items={makeMenuItems(topics[currentTopic].sessionTypes)}
          placeholder={{label: 'What type of Session...?'}}
          style={{ ...pickerSelectStyles }}
        />
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
            <DrillCard
              key={item.drillId}
              drill={item}
            />
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
    height: 100,
    width: 150,
    borderRadius: 20,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 15,

  },
  drillImage: {
    height: 100,
    width: 100
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 60,
    paddingBottom: 12,
    marginVertical: 20,
    width: 300,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    color: 'black',
  },
  placeholder: {
    color: colors.accent,
  },
  viewContainer: {
    alignSelf: 'center',
    
  }
});