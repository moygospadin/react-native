import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'



export const AddTodo = ({ onSubmit, showHideAnime, showHideNeAnime }) => {
  const [value, setValue] = useState('')

  const pressHander = () => {
    if (value.trim()) {
      if (value === 'anime') showHideAnime()
      if (value === 'ne anime') showHideNeAnime()
      if (value === 'Hello') Alert.alert('Hello my friend!')
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название дела не может быть пустым')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Хочу сдать все лабы за один раз"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={pressHander} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
})
