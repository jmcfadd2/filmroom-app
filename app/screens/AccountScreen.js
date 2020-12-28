import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { getUserData } from '../redux/actions/dataActions';
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import PostCard from '../components/PostCard';
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'



export default function AccountScreens() {
  const user = useSelector(state => state.user.credentials)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserData(user.handle))
  }, [])
  const loading = useSelector(state => state.data.loading)
  const posts = useSelector(state => state.data.posts)
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Justin McFadden'
          subtitle={user.handle}
          image={{ uri: user.imageUrl }}
        />
      </View>
      <View style={styles.container}>
        {/* {!loading && <FlatList
          data={posts}
          keyExtractor={post => post.postId}
          renderItem={({ item }) =>
            <PostCard
              post={item}
              onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
            />
          }
        />} */}
      </View>
      <ListItem
      title="Log Out"
      IconComponent={
        <Icon name="logout" backgroundColor='yellow' />
      }
      />

    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: 'lightgrey'
  }
})
