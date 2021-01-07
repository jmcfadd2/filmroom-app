import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { likePost, unlikePost } from '../redux/actions/dataActions'
import colors from '../config/colors';

export default function LikeButton({ postId, size }) {
  const dispatch = useDispatch()
  const likes = useSelector(state => state.user.likes)

  let likedPost = () => {
    if (
      likes &&
      likes.find(
        (like) => like.postId === postId
      )
    )
      return true;
    else return false;
  }



  return (

    (likedPost() ? (
      <TouchableWithoutFeedback onPress={() => dispatch(unlikePost(postId))}>
        <FontAwesome name='thumbs-up' size={size} color={colors.accent} />
      </TouchableWithoutFeedback>
    ) : (
        <TouchableWithoutFeedback onPress={() => {
          dispatch(likePost(postId))
        }}>
          <FontAwesome name='thumbs-o-up' size={size} color={colors.accent} />
        </TouchableWithoutFeedback>
      )
    )

  )
}

const styles = StyleSheet.create({})
