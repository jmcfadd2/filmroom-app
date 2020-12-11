import { useFormikContext } from 'formik';
import React from 'react'
import { StyleSheet } from 'react-native'
import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';


export default function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {
  const { errors, setFieldValue, touched, values} = useFormikContext()
  return (
    <>
    <Picker 
      items={items}
      onSelectedItem={(item) => {
        setFieldValue(name, item)
        console.log(values);
      }}
      numberOfColumns={numberOfColumns}
      PickerItemComponent={PickerItemComponent}
      placeholder={placeholder}
      selectedItem={values[name]}
      width={width}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})
