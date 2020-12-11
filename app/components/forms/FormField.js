import React from 'react'
import { useFormikContext } from 'formik'
import { StyleSheet, Text, View } from 'react-native'
import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps }
        
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})
