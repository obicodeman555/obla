//calculating if we need to hide the column

import { DragItem } from "../DragItem";

export const isHidden = (draggedItem: DragItem | null, itemType: string, id: string): boolean => {
    return Boolean(draggedItem && draggedItem.type === itemType && draggedItem.id === id)
}