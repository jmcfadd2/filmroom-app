import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/Screen'
import Form from '../../components/forms/Form';
import FormField from '../../components/forms/FormField';
import SubmitButton from '../../components/forms/SubmitButton';
import CategoryPickerItem from '../../components/CategoryPickerItem';
import FormImagePicker from '../../components/forms/FormImagePicker';
import { useDispatch, useSelector } from 'react-redux'
import { postSession } from '../../redux/actions/sessionActions'
import routes from '../../navigation/routes'
import { LOADING_SESSION } from '../../redux/types';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  description: Yup.string().label('Description'),
  
})

export default function StageSessionScreen({ navigation }) {
  const dispatch = useDispatch()
  const session = useSelector(state => state.session)
  const userImage = useSelector(state => state.user.credentials.imageUrl)
  const [uploading, setUploading] = useState(false);

  const handleSessionPost = (values) => {
    const sessionPost = {
      title: values.title,
      description: values.description,
      userImage: userImage,
      videoCount: values.videos.length,
      session: {
        drills: session.drills,
        drillResults: session.drillResults,
        topic: session.topic,
        type: session.type,
        sessionId: session.sessionId
      }
    }
    dispatch(postSession(session.sessionId, sessionPost, values.videos, values.images));
    navigation.navigate(routes.SESSION_LOADING);
  }

  return (
    <Screen>
      
      <Form
        initialValues={{
          title: "",
          description: "",
          images: [],
          videos: [],
        }}
        onSubmit={handleSessionPost}
        validationSchema={validationSchema}
      >

        <FormField maxLength={255} name="title" placeholder="Title" />


        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder={"Description"}
        />
        <FormImagePicker name='images' />
        <FormImagePicker name='videos' />
        <SubmitButton title="Post"  />
      </Form>

    </Screen>
  )
}

const styles = StyleSheet.create({

})
