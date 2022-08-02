import { Instance, types } from 'mobx-state-tree'
import { CanvasObject, TCanvasObject } from './CanvasObject'

export const CanvasObjects = types.model('CanvasObjects', {
  objects: types.array(CanvasObject)
})
.actions(self => {
  const findIndex = (id: string): number => {
    return self.objects.findIndex(object => object.id === id)
  }

  const push = (object: TCanvasObject): void => {
    self.objects.push(object)
  }

  const remove = (id: string): boolean => {
    const start = findIndex(id)

    if (start === -1) {
      return false
    }

    self.objects.splice(start, 1)

    return true
  }

  return {
    findIndex,
    push,
    remove
  }
})

export type TCanvasObjects = Instance<typeof CanvasObjects>
