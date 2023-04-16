export type ColumnDragItem = {
    id: string,
    listTitle: string,
    type: "COLUMN"
}

export type CardDragItem = {
    id: string,
    columnId: string,
    text: string,
    type: "CARD"
}

export type DragItem = ColumnDragItem | CardDragItem;