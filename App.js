import React, { useState } from 'react'
import { StyleSheet, Text, Image, View, FlatList } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'
// var Sound = require('react-native-sound')

export default function App() {
  const [todos, setTodos] = useState([])
  const [anime, useAnime] = useState(false)
  const showHideAnime = () => {
    useAnime((prev) => !prev)
    // sound = new Sound('tuturu.mp3')
    // sound.play()
    setTimeout(() => useAnime((prev) => !prev), 3000)
  }
  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ])
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  return (
    <View style={{ height: '100%' }}>
      {anime && (
        <Image style={styles.img} source={require('./src/assets/anime.png')} />
      )}
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} showHideAnime={showHideAnime} />

        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 30, paddingVertical: 20 },
  img: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '-5%',
  },
})
