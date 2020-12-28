import { useFormikContext,  } from 'formik';
import React from 'react'
import { StyleSheet } from 'react-native'
import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';


export default function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width, onChange }) {
  const { errors, setFieldValue, touched, values, } = useFormikContext()
  return (
    <>
    <Picker 
      items={items}
      name={name}
      onSelectedItem={(item, index) => {
        setFieldValue(name, item)
        onChange(item, index)
        
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
