import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../config/colors'
import AppText from '../Text'

export default function ProfileDetails({ user }) {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: user.imageUrl }}
        style={styles.userImage}
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
    marginVertical: 20
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',

  },
  handle: {
    fontSize: 30
    ,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  attribute: {
    flexDirection: 'row'
  },
  attributeContainer: {
    alignSelf: 'center'
  }
})
