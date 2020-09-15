import React, { useRef, useEffect } from 'react'
import { Animated, Text, View, StyleSheet, Image } from 'react-native'

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const upHight = useRef(new Animated.Value(350)).current // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
    }).start()

    Animated.timing(upHight, {
      toValue: 600,
      duration: 2500,
    }).start()
  }, [fadeAnim, upHight])

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,
        height: upHight, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  )
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View>
      <FadeInView style={styles.navbar}>
        <Image
          style={styles.anime}
          source={require('../src/assets/anime.png')}
        />
      </FadeInView>
    </View>
  )
}

const styles = StyleSheet.create({
  anime: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '-5%',
  },
  navbar: {
    height: 250,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#3949ab',
  },
})
