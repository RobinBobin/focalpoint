import { Instance, types } from 'mobx-state-tree'
import { CanvasObject as CanvasObjectBase } from '../../lib/mst/CanvasObject'

export const CanvasObject = CanvasObjectBase.props({
  field1: 'types.string',
  field2: types.string
})

export interface ICanvasObject extends Instance<typeof CanvasObject> {}
