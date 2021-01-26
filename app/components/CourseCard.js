import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from './Text'
import defaultStyles from '../config/styles';
import { Entypo } from '@expo/vector-icons';
import colors from '../config/colors';

export default function CourseCard({ course, style, onPress }) {
  const noImage = require('../assets/no-img.png')
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.courseCard}>
        <Image
          source={{ uri: course.image || `https://image.mux.com/${course.previewVideo}/thumbnail.png?width=428&start=3.0864165` }}
          style={{ width: '100%', height: 150 }}
        />
        <View style={styles.instructorContainer}>
          <Image

            source={course.instructorImage ? 
              { uri: course.instructorImage }
              : require('../assets/no-img.png')
            }
            style={styles.avatar}
          />
          <View style={styles.nametag}>
            <AppText style={styles.name}>{course.name || course.userHandle}</AppText>
            <AppText
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.subtitle}
            >
              FilmRoom Coach
        </AppText>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.description}>{course.title}</AppText>
        </View>
        <View style={styles.bottomInfo}>
          <AppText style={{ fontSize: 14 }}>{course.videos.length} Lessons</AppText>
          <Entypo name="dot-single" size={19} color="black" />
          <AppText style={{ fontSize: 14 }}>{course.drillVideos.length} Drills</AppText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  courseCard: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    overflow: "hidden",
    marginVertical: 20
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 10,
    marginRight: 20
  },
  instructorContainer: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 5

  },
  name: {
    color: colors.white,
    fontWeight: 'bold',
  },
  nametag: {
    width: '75%'
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
  },
  description: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    padding: 15
  },
  bottomInfo: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 14
  }

})
