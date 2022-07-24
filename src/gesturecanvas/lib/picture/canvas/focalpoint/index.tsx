import { Image, TransformsStyle, View } from 'react-native'
import { withAnchorPoint } from 'react-native-anchor-point'

const height = 262.4
const width = 393.6

export default () => {
  let transform: TransformsStyle = {
    transform: [
      { scale: 1 },
      { translateY: 0 }
    ]
  }

  transform = withAnchorPoint(
    transform,
    {
      x: 0.5,
      y: 0.5
    },
    {
      height,
      width
    }
  )

  return (
    <View style={{ overflow: 'hidden' }}>
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
  )
}
