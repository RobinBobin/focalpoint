import { StyleSheet } from 'react-native'
import { BOTTOM_BAR_HEIGHT } from '../bottombar/styles'
import { TOP_BAR_HEIGHT } from '../topbar/styles'

export const START_BAR_WIDTH = 60

const heightDelta = 25

export default StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    bottom: BOTTOM_BAR_HEIGHT + heightDelta,
    end: 0,
    position: 'absolute',
    top: TOP_BAR_HEIGHT + heightDelta,
    width: START_BAR_WIDTH
  }
})
