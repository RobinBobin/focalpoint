import { Image, StyleSheet, TransformsStyle, View } from 'react-native'
import { withAnchorPoint } from 'react-native-anchor-point'

const height = 262.4
const width = 393.6

const focalPoint = {
  x: width / 2,
  y: height
}

const translateY = height / 2 - focalPoint.y

export default () => {
  let transform: TransformsStyle = {
    transform: [
      { scale: 1.5 },
      { translateY: 50 }
    ]
  }

  transform = withAnchorPoint(
    transform,
    {
      x: 1,
      y: 1
    },
    {
      height,
      width
    }
  )

  return (
    <View style={styles.container}>
      <View
        style={{
          borderColor: 'blue',
          borderStyle: 'dotted',
          borderWidth: 2.5,
        }}
      >
        <View
          style={{
            overflow: 'hidden'
          }}
        >
          <Image
            source={require('./image.jpg')}
            style={[
              {
                height,
                width
              },
              transform
            ]}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
