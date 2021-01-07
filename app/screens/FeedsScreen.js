import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';
import PostCard from '../components/PostCard'
import Screen from '../components/Screen'
import routes from '../navigation/routes'
import colors from '../config/colors';


export default function FeedsScreen({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  const posts = useSelector(state => state.data.posts)
  const loading = useSelector(state => state.data.loading)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = () => {
    setIsRefreshing(true)
    dispatch(getPosts())
    !loading && setIsRefreshing(false)
  }
  return (
    <Screen style={styles.screen}>
      {!loading ? (<FlatList
        data={posts}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        keyExtractor={post => post.postId}
        renderItem={({item, index}) =>
        <PostCard
          post={item}
          index={index}
          session={item.session}
          cardOnPress={() => navigation.navigate(routes.POST_DETAILS, item)}
          navigation={navigation}
        />
      }
      />) : (
        <ActivityIndicator style={styles.indicator}  size='large' />
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15
  },
  indicator: {
    marginTop: 300
  }

})
