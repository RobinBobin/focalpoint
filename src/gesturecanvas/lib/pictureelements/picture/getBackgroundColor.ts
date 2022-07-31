import ColorConvert from 'color-convert'
import { KEYWORD as TColorName } from 'color-convert/conversions'
import { ColorValue, ViewStyle } from 'react-native'

export const getBackgroundColor = (resultingStyle: ViewStyle): ColorValue => {
  if (typeof resultingStyle.backgroundColor !== 'string') {
    return resultingStyle.backgroundColor!
  }
  
  if (resultingStyle.backgroundColor.startsWith('#')) {
    return resultingStyle.backgroundColor.substring(0, 7)
  }

  const args = ColorConvert.keyword.rgb(resultingStyle.backgroundColor as TColorName).join(', ')

  return `rgb(${args})`
}
