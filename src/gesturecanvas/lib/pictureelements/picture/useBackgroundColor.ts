import ColorConvert from 'color-convert'
import { KEYWORD as TColorName } from 'color-convert/conversions'
import { ColorValue, StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface IUseBackgroundColorReturnType {
  backgroundColor: ColorValue
  resultingStyle: ViewStyle
}
export const useBackgroundColor = (...styles: StyleProp<ViewStyle>[]): IUseBackgroundColorReturnType => {
  let backgroundColor: ColorValue
  const resultingStyle = StyleSheet.flatten(styles)

  if (typeof resultingStyle.backgroundColor !== 'string') {
    backgroundColor = resultingStyle.backgroundColor!
  } else if (resultingStyle.backgroundColor.startsWith('#')) {
    backgroundColor = resultingStyle.backgroundColor.substring(0, 7)
  } else {
    const args = ColorConvert.keyword.rgb(resultingStyle.backgroundColor as TColorName).join(', ')

    backgroundColor = `rgb(${args})`
  }

  return { backgroundColor, resultingStyle }
}
