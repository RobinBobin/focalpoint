import React from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './styles'
import { BottomBar } from './bottombar'
import { EndBar } from './endbar'
import { StartBar } from './startbar'
import { TopBar } from './topbar'
import { Picture } from '../lib/picture'
import { Canvas } from '../lib/picture/canvas'

const App: React.VFC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Picture>
          <Canvas style={styles.canvas} />
        </Picture>
        <TopBar />
        <BottomBar />
        <StartBar />
        <EndBar />
      </View>
    </SafeAreaView>
  )
}

export default App
