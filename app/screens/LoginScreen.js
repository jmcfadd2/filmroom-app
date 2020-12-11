import { Formik } from 'formik'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/Button'
import AppTextInput from '../components/TextInput'
import Screen from '../components/Screen'
import * as Yup from 'yup';
import AppText from '../components/Text'
import { Form, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
})

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/reppit-text-logo.png')}
      />

      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title="Login" />
      </Form>


    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 270,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})
