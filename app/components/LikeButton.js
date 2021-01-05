import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LikeButton() {
  const likes = useSelector(state => state.user.likes)

  likedPost = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.postId === this.props.postId
      )
    )
      return true;
    else return false;
  }
  return (
    <View>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({})
