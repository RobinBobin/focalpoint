import { Instance, types } from 'mobx-state-tree'
import { Position } from './Position'

export const CanvasObject = Position.named('CanvasObject')
.props({
  id: types.identifier,
  offsetX: 0,
  offsetY: 0
})
.actions(self => {
  const setOffsetX = (offsetX: number): void => {
    self.offsetX = offsetX
  }

  const setOffsetY = (offsetY: number): void => {
    self.offsetY = offsetY
  }

  return {
    setOffsetX,
    setOffsetY
  }
})

export type TCanvasObject = Instance<typeof CanvasObject>
