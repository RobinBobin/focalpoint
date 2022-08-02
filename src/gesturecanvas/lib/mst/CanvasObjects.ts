import { Instance, types } from 'mobx-state-tree'
import { CanvasObject, TCanvasObject } from './CanvasObject'

export const CanvasObjects = types.model('CanvasObjects', {
  objects: types.array(CanvasObject)
})
.actions(self => {
  const push = (object: TCanvasObject): void => {
    self.objects.push(object)
  }

  const remove = (id: string): boolean => {
    const start = self.objects.findIndex(object => object.id === id)

    if (start === -1) {
      return false
    }

    self.objects.splice(start, 1)

    return true
  }

  return {
    push,
    remove
  }
})

export type TCanvasObjects = Instance<typeof CanvasObjects>
