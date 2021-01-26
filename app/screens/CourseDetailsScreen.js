import { Video } from 'expo-av';
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen';
import AppText from '../components/Text';
import defaultStyles from '../config/styles';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../components/Button';
import VideoListItem from '../components/VideoListItem';
import colors from '../config/colors';
import { addCourseToLibrary } from '../redux/actions/courseActions';
import { useDispatch } from 'react-redux';


export default function CourseDetailsScreen({ navigation, route }) {
  const dispatch = useDispatch()
  const course = route.params
  const [activeVideo, setActiveVideo] = useState(course.previewVideo)
  const handleAddCourse = () => {
    dispatch(addCourseToLibrary(course))
  }
  return (
    <View style={styles.detailsScreen}>
      {console.log(course.drillInfo)}
      <Video
        source={{ uri: `https://stream.mux.com/${activeVideo}.m3u8`, overrideFileExtensionAndroid: 'm3u8' }}
        resizeMode='cover'
        useNativeControls
        style={{ height: 300, width: '100%' }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <AppText style={styles.title}>{course.title}</AppText>
          <View style={styles.otherInfo}>
            <AppText style={{ fontSize: 14 }}>{course.videos.length} Lessons</AppText>
            <Entypo name="dot-single" size={19} color="black" />
            <AppText style={{ fontSize: 14 }}>{course.drillVideos.length} Drills</AppText>
          </View>
        </View>
        <View style={styles.addButton}>
          <AppButton title='Add To Library' onPress={handleAddCourse} />
        </View>
        <View style={styles.videoList}>
          <FlatList
            data={course.videos}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item, index}) => (
              <VideoListItem
                title={`${course.videoTitles[index]} video `}
                onPress={() => setActiveVideo(item)}
              />
            )}
          />
        </View>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    height: '100%',
    backgroundColor: colors.primary,

  },
  header: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingTop: 15
  },
  otherInfo: {
    height: 20,
    flexDirection: 'row'
  },
  addButton: {
    width: 200,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  videoList: {
    
  }
})
