import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Button'

export default function SubmitButton({ title, loading }) {
  const { handleSubmit } = useFormikContext()
  return (
    
      <Button title={title} loading={loading} onPress={handleSubmit}/>
    
  )
}

const styles = StyleSheet.create({
  
})
