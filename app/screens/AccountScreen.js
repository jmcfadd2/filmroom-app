import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getUserPosts } from '../redux/actions/dataActions';
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import PostCard from '../components/PostCard';
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors';
import ProfileDetails from '../components/profile/ProfileDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { getUserData } from '../redux/actions/userActions';



export default function AccountScreen({ navigation }) {
  const user = useSelector(state => state.user.credentials)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserPosts(user.handle))
  }, [])
  const loading = useSelector(state => state.data.loading)
  const posts = useSelector(state => state.data.userPosts)
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = () => {
    setIsRefreshing(true)
    dispatch(getUserPosts(user.handle))
    dispatch(getUserData())
    !loading && setIsRefreshing(false)
  }
  return (
    <Screen style={styles.screen}>
      <ScrollView 
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            title="Pull to refresh"
            tintColor="#fff"
            titleColor={colors.accent}
          />}
      >
        <ProfileDetails user={user} />
        <View style={styles.container}>
          {!loading ? <FlatList
            data={posts}
            keyExtractor={post => post.postId}
            renderItem={({ item, index }) =>
              <PostCard
                post={item}
  
                style={{ marginHorizontal: 20 }}
                index={index}
                session={item.session}
                cardOnPress={() => navigation.navigate(routes.POST_DETAILS, item)}
                navigation={navigation}
              />
            }
          /> : <ActivityIndicator size='large' style={styles.indicator} />}
        </View>
      </ScrollView>

    </Screen>
  )
}

const styles = StyleSheet.create({
  indicator: {
    marginTop: 300
  }

})
