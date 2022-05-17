import React from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './styles'
import { BottomBar } from './bottombar'
import { TopBar } from './topbar'

const App: React.VFC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TopBar />
        <BottomBar />
      </View>
    </SafeAreaView>
  )
}

export default App
