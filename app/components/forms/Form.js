import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppForm({initialValues, onSubmit, validationSchema, children}) {
  return (
    <View style={styles.container}>
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      
    >
      { () => <>{children}</>}

    </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
