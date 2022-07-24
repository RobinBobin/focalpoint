import { types } from 'mobx-state-tree'
import { IPositionInWindow, PositionInWindow } from './PositionInWindow'

const CanvasStore = types.model('CanvasStore', {
  positionInWindow: PositionInWindow
})
.actions(self => {
  const setPositionInWindow = (positionInWindow: IPositionInWindow): void => {
    self.positionInWindow = positionInWindow
  }

  return {
    setPositionInWindow
  }
})

export const canvasStore = CanvasStore.create({
  positionInWindow: {
    height: 0,
    width: 0,
    x: 0,
    y: 0
  }
})
