import { types } from 'mobx-state-tree'
import { CanvasObject } from './CanvasObject'
import { CanvasObjects as CanvasObjectsBase } from '../../lib/mst/CanvasObjects'

const CanvasObjects = CanvasObjectsBase.props({
  objects: types.array(CanvasObject)
})

export const objects = CanvasObjects.create()
