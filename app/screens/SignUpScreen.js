import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import AppButton from '../components/Button'
import AppTextInput from '../components/TextInput'
import Screen from '../components/Screen'
import * as Yup from 'yup';
import { signupUser } from '../redux/actions/userActions';
import AppText from '../components/Text'
import { Form, AppFormField, SubmitButton } from '../components/forms';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  handle: Yup.string().required().min(4).label('Handle'),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch()
  const loginLoading = useSelector(state => state.ui.loading)
  const serverErrors = useSelector(state => state.ui.errors)
  const handleSubmit = (values) => {
    dispatch(signupUser(values))
  }
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/filmroom-text-logo.png')}
      />

      <Form
        initialValues={{handle: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {serverErrors !== undefined && 
          <AppText>{serverErrors}</AppText>
        }
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="account"
          name="handle"
          placeholder="Username"
          
        />
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
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="check"
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title="Sign Up" loading={loginLoading} />
      </Form>

      <AppButton title='Login Here' onPress={() => navigation.navigate(routes.LOGIN)} />



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
