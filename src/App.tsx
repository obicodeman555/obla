import { AddNewItem } from "./components/AddNewItem"
import { AppContainer, AppHeader } from "./styles"
import { Column } from "./components/Column"
import { useAppState } from "./state/AppStateContext"

export const App = () => {
  const { lists } = useAppState();

  return (
    <>
      <AppHeader>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppHeader>
      <AppContainer>
        {
          lists.map((list) => (
            <Column text={list.text} key={list.id} id={list.id} />
          ))
        }


      </AppContainer>
    </>
  )
}



