//calculating if we need to hide the column

import { DragItem } from "../DragItem";

export const isHidden = (draggedItem: DragItem | null, itemType: string, id: string, isPreview?: boolean): boolean => {
    return Boolean(!isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id)
}