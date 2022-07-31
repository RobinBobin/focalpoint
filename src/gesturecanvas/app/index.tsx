import React from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './styles'
import { BottomBar } from './bottombar'
import { EndBar } from './endbar'
import { StartBar } from './startbar'
import { TopBar } from './topbar'
import { Canvas } from '../lib/pictureelements/canvas'
import { Picture } from '../lib/pictureelements/picture'

const App: React.VFC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Picture
          canvas={<Canvas style={styles.canvas} />}
          style={{
            flex: 0,
            height: 500,
            start: 100,
            top: 200,
            width: 800
          }}
        />
        <TopBar />
        <BottomBar />
        <StartBar />
        <EndBar />
      </View>
    </SafeAreaView>
  )
}

export default App
