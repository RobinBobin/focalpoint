import { Instance, types } from 'mobx-state-tree'

export const Position = types.model('Position', {
  height: 0,
  width: 0,
  x: 0,
  y: 0
})

export interface IPosition extends Instance<typeof Position> {}
