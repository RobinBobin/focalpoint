import { Instance, types } from 'mobx-state-tree'
import { IPosition, Position } from './Position'

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

export interface ICanvasObject extends Instance<typeof CanvasObject> {}

export interface INewCanvasObject extends Pick<IPosition, 'height' | 'width' | 'x' | 'y'> {
  id: string
}
