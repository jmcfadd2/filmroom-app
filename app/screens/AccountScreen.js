import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { getUserData } from '../redux/actions/dataActions';
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import PostCard from '../components/PostCard';
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors';
import ProfileDetails from '../components/profile/ProfileDetails';



export default function AccountScreen({ navigation }) {
  const user = useSelector(state => state.user.credentials)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserData(user.handle))
  }, [])
  const loading = useSelector(state => state.user.loading)
  const posts = useSelector(state => state.user.userPosts)
  return (
    <Screen style={styles.screen}>
      <ProfileDetails user={user} />
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={post => post.postId}
          renderItem={({ item, index }) =>
            <PostCard
              post={item}
              style={{ margin: 20}}
              index={index}
              session={item.session}
              cardOnPress={() => navigation.navigate(routes.POST_DETAILS, item)}
              navigation={navigation}
            />
          }
        />
      </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  
  
})
