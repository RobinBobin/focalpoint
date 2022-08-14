import { observer } from 'mobx-react-lite'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { CanvasObject } from './CanvasObject'
import { BottomBar } from './bars/bottombar'
import { EndBar } from './bars/endbar'
import { StartBar } from './bars/startbar'
import { TopBar } from './bars/topbar'
import { TCanvasObject } from './mst/CanvasObject'
import { objects } from './mst/CanvasObjects'
import styles from './styles'
import { Canvas } from '../lib/pictureelements/canvas'
import { Picture } from '../lib/pictureelements/picture'

const App: React.VFC = observer(() => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Picture
          canvasObjects={objects.objects as TCanvasObject[]}
          style={{
            flex: 0,
            height: 500,
            start: 100,
            top: 200,
            width: 800
          }}
          touchOptions={{
            onPressIn: {
              handler({ changedTouches }) {
                console.log('onPressIn', changedTouches)
              }
            },
            onPressOut: {
              handler({ changedTouches }) {
                console.log('onPressOut', changedTouches)
              }
            }
          }}
        >
          <Canvas style={styles.canvas}>
            {objects.objects.map((object: TCanvasObject, index) => (
              <CanvasObject key={index} object={object} />
            ))}
          </Canvas>
        </Picture>
        <TopBar />
        <BottomBar />
        <StartBar />
        <EndBar />
      </View>
    </SafeAreaView>
  )
})

export default App
