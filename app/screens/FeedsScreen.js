import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';
import PostCard from '../components/PostCard'
import Screen from '../components/Screen'
import routes from '../navigation/routes'


export default function FeedsScreen({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  const posts = useSelector(state => state.data.posts)
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={posts}
        keyExtractor={post => post.postId}
        renderItem={({item}) =>
        <PostCard
          post={item}
          session={item.session}
          onPress={() => navigation.navigate(routes.POST_DETAILS, item)}
        />
      }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
})
