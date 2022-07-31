import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { CanvasObject } from './CanvasObject'
import { BottomBar } from './bars/bottombar'
import { EndBar } from './bars/endbar'
import { StartBar } from './bars/startbar'
import { TopBar } from './bars/topbar'
import { objects } from './mst/objects'
import styles from './styles'
import { Canvas } from '../lib/pictureelements/canvas'
import { Picture } from '../lib/pictureelements/picture'

const App: React.VFC = observer(() => {
  const frozenObjects = toJS(objects.objects)

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Picture
          onTap={(canvasX, canvasY) => {
            'worklet'
            
            console.log('Tap absolute', canvasX, canvasY)

            console.log(frozenObjects)

            console.log('Is inside', frozenObjects.some(object => (
              canvasX >= object.x
              && canvasX < object.x + object.width
              && canvasY >= object.y
              && canvasY < object.y + object.height
            )))
          }}
          style={{
            flex: 0,
            height: 500,
            start: 100,
            top: 200,
            width: 800
          }}
        >
          <Canvas style={styles.canvas}>
            {frozenObjects.map((object, index) => (
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
