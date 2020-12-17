import { Video } from 'expo-av'
import React from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { FlatList } from 'react-native-gesture-handler'
import AppText from './Text'
import Text from './Text'
import Icon from './Icon';

export default function Card({ post, style, onPress }) {
  const { session } = post
  const compMetric = session.drillResults.compoundMetric

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
        <Text style={styles.subtitle}>This is the body description of what k</Text>
      </View>
      <View style={styles.sessionContainer}>
        <AppText style={styles.topic}>{session.topic} Session</AppText>
        {session &&
          session.drillResults.map((result, index) => (
            <View style={styles.drill} key={index}>
              <AppText>{result.drillName}</AppText>
              {!result.results.compoundMetric ?
                result.results.map((metric, index) => (
                  <View key={index}>
                    <AppText>{metric}</AppText>
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
      <View style={styles.videos}>

        {post.videos &&
          <FlatList
            horizontal
            data={post.videos}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item }) => (
              <Image
                source={{ uri: `https://image.mux.com/${item}/thumbnail.png?width=428&start=3.0864165` }}
                style={{ width: 100, height: 100 }}
              />
            )}
          />}
      </View>
      <View>
        <FlatList
          horizontal
          data={post.images}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: 100, height: 100 }}
            />
          )}
        />

      </View>
      <View style={styles.actionBar}>
            <View>
              <MaterialCommunityIcons name='thumb-up' />
            </View>
            <View>
          <MaterialCommunityIcons name='comment' />
            </View>
            <View>
          <MaterialCommunityIcons name='share' />
            </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: "hidden",
    marginVertical: 20
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
  detailsContainer: {
    padding: 20,
  },
  subtitle: {
    color: 'grey',

  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold',
    color: 'black'
  },
  topic: {
    fontWeight: 'bold'
  },
  sessionContainer: {
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center'
  },
  drill: {
    alignSelf: 'center'
  },
  compoundMetric: {
    flexDirection: 'row',
    width: '35%'
  },
  firstMetric: {
    marginRight: 8
  },
  actionBar: {
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    justifyContent: 'space-evenly',
    height: 30,
    alignItems: 'center'

  },
})
