import React, { useState, useRef } from 'react'
import { StyleSheet, Text, Image, View, FlatList, Animated } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'
import { Audio } from 'expo-av'
import FadeInView from './src/FadeInView'

async function playMusic() {
  try {
    const { sound: soundObject, status } = await Audio.Sound.createAsync(
      require('./src/assets/tuturu.mp3'),
      {
        shouldPlay: true,
      }
    )
  } catch (error) {}
}
export default function App() {
  const [todos, setTodos] = useState([])
  const [anime, useAnime] = useState(false)
  const [neAnime, useNeAnime] = useState(false)
  const showHideAnime = () => {
    useAnime((prev) => !prev)
    playMusic()
    setTimeout(() => useAnime((prev) => !prev), 3000)
  }

  const showHideNeAnime = () => {
    useNeAnime((prev) => !prev)
    playMusic()
    setTimeout(() => useNeAnime((prev) => !prev), 3000)
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
      <View>
        {anime && (
         <FadeInView/>
        )}
        {neAnime && (
          <Image
            style={styles.ne_anime}
            source={require('./src/assets/ne_anime.jpg')}
          />
        )}
      </View>
    
      <Navbar title="Todo list"/>
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
          showHideAnime={showHideAnime}
          showHideNeAnime={showHideNeAnime}
        />

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
  ne_anime: {
    position: 'absolute',
    top:150,
    alignSelf: 'center',
    width: '80%',
    resizeMode: 'contain',
  },
})
