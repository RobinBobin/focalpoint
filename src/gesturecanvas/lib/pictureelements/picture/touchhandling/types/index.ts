import { TouchData } from 'react-native-gesture-handler'
import { TPictureElementName } from '../../../../hooks/useMeasureInWindow'
import { TCanvasObject as TCanvasObjectBase } from '../../../../mst/CanvasObject'

export type TPictureElement<TCanvasObject extends TCanvasObjectBase> = TCanvasObject[] | TPictureElementName

export interface ITouchData<TCanvasObject extends TCanvasObjectBase> extends Pick<TouchData, 'id' | 'absoluteX' | 'absoluteY'> {
  pictureElement: TPictureElement<TCanvasObject>
}
