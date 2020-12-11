import * as Yup from 'yup'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import AppForm from '../components/forms/Form';
import FormField from '../components/forms/FormField';
import FormPicker from '../components/forms/FormPicker';
import SubmitButton from '../components/forms/SubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: "Clothing", value: 2, backgroundColor: 'blue', icon: 'email' },
  { label: "Camera", value: 3, backgroundColor: 'green', icon: 'basketball' },
]
export default function ListingEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          width={120}
          placeholder="Price"
        />
        <FormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          placeholder="Category"
          width='50%'
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder={"Description"}
        />
        <SubmitButton title="Post" />
      </AppForm>

    </Screen>
  )
}

const styles = StyleSheet.create({})
