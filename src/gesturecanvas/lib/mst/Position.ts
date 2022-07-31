import { Instance, types } from 'mobx-state-tree'

export const Position = types.model('Position', {
  height: 0,
  width: 0,
  x: 0,
  y: 0
})
.actions(self => {
  function setHeight(height: number): void {
    self.height = height
  }

  function setWidth(width: number): void {
    self.width = width
  }

  function setX(x: number): void {
    self.x = x
  }

  function setY(y: number): void {
    self.y = y
  }

  function set(height: number, width: number, x: number, y: number) {
    setHeight(height)
    setWidth(width)
    setX(x)
    setY(y)
  }

  return {
    set,
    setHeight,
    setWidth,
    setX,
    setY
  }
})

export interface IPosition extends Instance<typeof Position> {}
