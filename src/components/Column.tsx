import { ColumnContainer, ColumnTitle } from "../styles"
import { useRef } from "react";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../utils/useItemDrag";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { Card } from "./Card";
import { moveList, addTask, moveTask, setDraggedItem } from "../state/actions";
import { isHidden } from "../utils/isHidden";
import { DragItem } from "../DragItem";
type ColumnProps = {
    listTitle: string,
    id: string,
    isPreview?: boolean
}



export const Column = ({ listTitle, id, isPreview }: ColumnProps) => {
    const { draggedItem, getTasksByListId, dispatch } = useAppState();

    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: ["COLUMN", "CARD"],
        hover(draggedItem: DragItem) {
            if (!draggedItem) {
                return
            }
            if (draggedItem.type === "COLUMN") {
                if (draggedItem.id === id) {
                    return
                }

                dispatch(moveList(draggedItem.id, id))
            } else {
                if (draggedItem.columnId === id) {
                    return
                }

                if (tasks.length) {
                    return
                }

                dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
                dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
            }
        }
    })

    const { drag } = useItemDrag({ type: "COLUMN", id, listTitle })

    drag(drop(ref));

    return (
        <ColumnContainer isPreview={isPreview} ref={ref} isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}>
            <ColumnTitle>{listTitle}</ColumnTitle>
            {
                tasks.map(task => (
                    <Card text={task?.text} key={task?.id} id={task?.id} columnId={id} />
                ))
            }
            <AddNewItem toggleButtonText="+ Add another task" onAdd={text => dispatch(addTask(text, id))} dark />
        </ColumnContainer>
    )
}
