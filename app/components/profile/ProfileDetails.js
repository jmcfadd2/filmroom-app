import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../config/colors'
import AppText from '../Text'
import * as ImagePicker from 'expo-image-picker'
import routes from '../../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { editUserImage, getUserData } from '../../redux/actions/userActions';

export default function ProfileDetails({ user, navigation }) {
  const dispatch = useDispatch()
  const handle = useSelector(state => state.user.credentials.handle)
  const imageUrl = useSelector(state => state.user.credentials.imageUrl)
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert("You need to give access")
    
  }

  const selectImage = async () => {
    try {

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7
      })
      if (!result.cancelled) {
        await dispatch(editUserImage(result.uri, handle))
      }
    } catch (error) {
      console.log("Error reading image")
    }
  }
  const handleEditImage = async () => {
    requestPermission()
    await selectImage()
  }
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.userImage}
      />
      <MaterialIcons
        style={styles.editImage}
        name='add-circle' size={28}
        color={colors.accent}
        onPress={handleEditImage}
      />
      <AppText style={styles.handle}>{user.handle}</AppText>
      <View style={styles.attributeContainer}>
        {user.location !== undefined &&
          <View style={styles.attribute}>
            <MaterialIcons name='location-on' color={colors.accent} size={20} />
            <AppText> {user.location}</AppText>
          </View>
        }
        {user.website !== undefined &&
          <View style={styles.attribute}>
            <MaterialIcons name='link' color={colors.accent} size={20} />
            <AppText> {user.website}</AppText>
          </View>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginTop: 20
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',

  },
  handle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  attribute: {
    flexDirection: 'row'
  },
  attributeContainer: {
    alignSelf: 'center'
  },
  editImage: {
    alignSelf: 'center',
    position: 'absolute',
    top: 100,
    right: 140
  }
})
