
import { createContext, useContext, PropsWithChildren, Dispatch } from "react"
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";

const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            listTitle: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            listTitle: "In Progress",
            tasks: [{ id: "c1", text: "Learn TypeScript" }]
        },
        {
            id: "2",
            listTitle: "Done",
            tasks: [{ id: "c2", text: "Begin to use static typing" }]
        },
    ]
}



const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);


type AppStateContextProps = {
    draggedItem: DragItem | null
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

export const AppStateProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useImmerReducer(appStateReducer, appData);

    const { draggedItem, lists } = state;


    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}