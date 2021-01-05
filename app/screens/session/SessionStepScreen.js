import { Video } from 'expo-av';
import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../../components/Button';
import Screen from '../../components/Screen';
import AppText from '../../components/Text';
import AppTextInput from '../../components/TextInput';
import colors from '../../config/colors';
import navigationTheme from '../../navigation/navigationTheme';
import routes from '../../navigation/routes';
import { stageSession, updateResults } from '../../redux/actions/sessionActions';

export default function SessionStepScreen({ navigation }) {
  const dispatch = useDispatch()
  const drills = useSelector(state => state.session.drills)
  const drillResults = useSelector(state => state.session.drillResults)
  const [activeDrill, setActiveDrill] = useState(0)
  const [results, setResults] = useState()

  const nextDrill = () => {
    setActiveDrill(activeDrill + 1)
    dispatch(updateResults(results, drills[activeDrill].name, drills[activeDrill].drillId))
    setResults([])
  }

  const handleStage = () => {
    dispatch(stageSession(drillResults))
  }

  const drill = drills[activeDrill]

  const handleFirstCompoundMetric = (text) => {
    setResults({ ...results, compoundMetric: [text] })
    console.log(results);
  }
  const handleSecondCompoundMetric = (text) => {
    results.compoundMetric[1] = text
    console.log(results);
  }
  return (
    <Screen>
      <KeyboardAvoidingView
        behavior='position'
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
          <Video
            source={{ uri: `https://stream.mux.com/${drills[activeDrill].drillVideoId}.m3u8`, overrideFileExtensionAndroid: 'm3u8' }}
            resizeMode='cover'

            isMuted
            shouldPlay

            style={{ height: 300, width: '100%' }}
          />
          <View style={styles.nameContainer}>
            <AppText>Drill #{activeDrill + 1}:</AppText>
            <AppText style={styles.name}>{drill.name}</AppText>
          </View>
          <View>
            {
              drill.metrics.map((metric, index) => (
                <View key={index} style={styles.resultsContainer}>
                  <AppText style={styles.resultsTitle}>Results:</AppText>
                  {metric.includes("/") || metric.includes(" x ") ?
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <AppText style={styles.metricName}>{metric.split(/(\sx\s|\/)/)[0]}</AppText>
                        <AppTextInput
                          style={styles.result}
                          keyboardType='number-pad'
                          fontSize={60}
                          onChangeText={(text) => handleFirstCompoundMetric(text)}
                        />
                      </View>
                      <AppText style={styles.operation}>{metric.split(/(\sx\s|\/)/)[1]}</AppText>
                      <View>
                        <AppText style={styles.metricName}>{metric.split(/(\sx\s|\/)/)[2]}</AppText>
                        <AppTextInput
                          style={styles.result}
                          keyboardType='number-pad'
                          fontSize={60}
                          onChangeText={(text) => handleSecondCompoundMetric(text)}

                        />
                      </View>
                    </View>
                    : null}
                </View>
              ))
            }
            <AppButton
              title='Next Drill'
              style={styles.appButton}

              onPress={drills.length !== (activeDrill + 1) ?
                () => nextDrill() : () => navigation.navigate(routes.SESSION_STAGE)}
            />
          </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  nameContainer: {
    justifyContent: 'center'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.white,
    alignSelf: 'center'
  },
  resultsContainer: {
    alignSelf: 'center'
  },
  resultsTitle: {
    alignSelf: 'center',
    fontSize: 26
  },
  result: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginBottom: 30
  },
  metricName: {
    fontSize: 26,
    color: colors.white,
    alignSelf: 'center'
  },
  operation: {
    fontSize: 80,
    marginTop: 35
  },
  appButton: {
    width: '70%',
    alignSelf: 'center'
  }
})
