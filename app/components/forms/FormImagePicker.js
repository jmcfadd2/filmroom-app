import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet } from 'react-native'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
    console.log(values);
  }

  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri))
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        type={name}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})
