import { Video } from 'expo-av'
import React from 'react'
import { Alert, Image, ImageBackground, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { FlatList } from 'react-native-gesture-handler'
import AppText from './Text'
import Text from './Text'
import Icon from './Icon';
import colors from '../config/colors';
import LikeButton from './LikeButton';
import { useSelector } from 'react-redux';
import routes from '../navigation/routes';

export default function Card({ post, style, index, cardOnPress, navigation }) {
  const { session, } = post
  const compMetric = session.drillResults.compoundMetric
  const likeCount = useSelector(state => state.data.posts[index].likeCount)
  const commentCount = useSelector(state => state.data.posts[index].commentCount)
  const showAlert = () => {
    Alert.alert(
      'Excuse our growing pains',
      'This action is not availble yet'
      )
  }
  return (


    <View style={[styles.card, style]}>

      <View style={styles.banner}>
        <Image style={styles.image} source={{ uri: post.userImage }} />
        <View>
          <AppText>{post.userHandle}</AppText>
          <AppText>{dayjs(post.createdAt).format("MMMM D, YYYY")}</AppText>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.subtitle}>{post.body}</Text>
      </View>
      <View style={styles.sessionContainer}>
        <AppText style={styles.topic}>{session.topic} Session</AppText>
        <View style={styles.drillContainer}>
          {session &&
            session.drillResults.map((result, index) => (
              <View style={styles.drill} key={index}>
                <AppText color={colors.white}>{result.drillName}</AppText>
                {!result.results.compoundMetric ?
                  result.results.map((metric, index) => (
                    <View key={index}>
                      <AppText color={colors.white}>{metric}</AppText>
                    </View>
                  )) : (
                    <View style={styles.compoundMetric}>
                      <AppText style={styles.firstMetric}>
                        {result.results.compoundMetric[0]}/{result.results.compoundMetric[1]}
                      </AppText>
                      <AppText>
                        {(result.results.compoundMetric[0] / result.results.compoundMetric[1] * 100).toPrecision(3)}%
                        </AppText>
                    </View>
                  )}
              </View>
            ))}
        </View>
      </View>
      <View style={styles.videos}>

        {post.videos &&
          <FlatList
            horizontal
            data={post.videos}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate(routes.VIEW_IMAGE, { video: item })}>
                <ImageBackground
                  source={{ uri: `https://image.mux.com/${item}/thumbnail.png?width=428&start=3.0864165` }}
                  style={styles.videoThumb}
                >
                  <FontAwesome
                    name='play'
                    color={colors.grey}
                    size={40}
                  />
                </ImageBackground>
              </TouchableOpacity>

            )}
          />}
      </View>
      <View>
        <FlatList
          horizontal
          data={post.images}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(routes.VIEW_IMAGE, { image: item })}>
              <Image
                source={{ uri: item }}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>

          )}
        />
      </View>
      {likeCount || commentCount !== 0 ?
        <View style={styles.likeBar}>
          {likeCount !== 0 &&
            <View style={styles.likeContainer}>
              <FontAwesome name='thumbs-up' size={20} color={colors.accent} />
              <AppText>
                {likeCount} {likeCount === 1 ? 'like' : 'likes'}
              </AppText>
            </View>}
          {commentCount !== 0 &&
            <View style={styles.commentContainer}>
              <AppText>{commentCount} {commentCount === 1 ? 'comment' : 'comments'}</AppText>
            </View>}
        </View> : null}
      <View style={styles.actionBar}>
        <View style={styles.actionContainer}>
          <LikeButton postId={post.postId} size={28} />

        </View>
        <View style={styles.actionContainer}>
          <MaterialIcons onPress={showAlert} name='chat' size={28} color={colors.accent} />
        </View>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.27,
    shadowRadius: 7.49,

    elevation: 3,
  },
  banner: {
    height: '20%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,

  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 20
  },
  videos: {
    marginVertical: 10,

  },
  videoThumb: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsContainer: {
    padding: 20,
  },
  subtitle: {
    color: colors.white,

  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold',
    color: colors.white
  },
  topic: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  sessionContainer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
    padding: 20,
    width: '100%'
  },
  drillContainer: {
    flexDirection: 'row'
  },
  drill: {
    alignSelf: 'center',
    marginRight: 15,
  },
  compoundMetric: {
    flexDirection: 'row',
    
  },
  firstMetric: {
    paddingRight: 8
  },
  likeBar: {
    flexDirection: 'row',

    marginTop: 20,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    paddingVertical: 5
  },
  actionBar: {
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    height: 50,
    width: '100%',


  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  likeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start'
  }
})
