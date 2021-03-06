import React, {useEffect} from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import CourseCard from '../components/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../redux/actions/courseActions';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import routes from '../navigation/routes';
export default function LearnScreen({ navigation }) {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCourses())
  }, [])
  const courses = useSelector(state => state.courses.courses)
  const loading = useSelector(state => state.courses.loading)

  return (
      <Screen style={defaultStyles.screen}>
        {!loading ? <FlatList 
          data={courses}
          keyExtractor={(course, i) => i.toString()}
          renderItem={({item}) => (
            <CourseCard 
            course={item} 
              onPress={() => navigation.navigate(routes.COURSE_DETAILS, item)}
            />
          )}
        /> : <ActivityIndicator size='large' style={styles.indicator} />  }
      </Screen>

    
  )
}

const styles = StyleSheet.create({
  indicator: {
    marginTop: 300
  }
})
