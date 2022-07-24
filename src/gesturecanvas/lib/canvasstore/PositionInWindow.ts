import { Instance, types } from 'mobx-state-tree'

export const PositionInWindow = types.model('PositionInWindow', {
  height: 0,
  width: 0,
  x: 0,
  y: 0
})

export interface IPositionInWindow extends Instance<typeof PositionInWindow> {}
