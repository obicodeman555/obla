
import { createContext, useContext, PropsWithChildren } from "react"

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c1", text: "Learn TypeScript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c2", text: "Begin to use static typing" }]
        },
    ]
}


type Task = {
    id: string,
    text: string,
}

type List = {
    id: string,
    text: string,
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}


const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);


type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
}

export const AppStateProvider = ({ children }: PropsWithChildren) => {
    const { lists } = appData;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}