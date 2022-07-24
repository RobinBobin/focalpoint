import ColorConvert from 'color-convert'
import { KEYWORD as TColorName } from 'color-convert/conversions'
import { ColorValue, ViewStyle } from 'react-native'

// const resultingStyle = StyleSheet.flatten([styles.container, style])

export const getBackgroundColor = (resultingStyle: ViewStyle): ColorValue => {
  if (typeof resultingStyle.backgroundColor !== 'string') {
    return resultingStyle.backgroundColor!
  }
  
  const bgColor = resultingStyle.backgroundColor.startsWith('#') ? resultingStyle.backgroundColor : ColorConvert.keyword.rgb(resultingStyle.backgroundColor as TColorName)

  return bgColor
}
