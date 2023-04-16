import { AddNewItem } from "./components/AddNewItem"
import { AppContainer, AppHeader } from "./styles"
import { Column } from "./components/Column"
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <>
      <AppHeader>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))} />
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



