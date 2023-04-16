import { AddNewItem } from "./components/AddNewItem"
import { AppContainer, AppHeader } from "./styles"
import { Column } from "./components/Column"
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./components/CustomDragLayer";

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <>
      <AppHeader>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch(addList(text))} />
      </AppHeader>
      <AppContainer>
        <CustomDragLayer />
        {
          lists.map((list) => (
            <Column listTitle={list.listTitle} key={list.id} id={list.id} />
          ))
        }
      </AppContainer>
    </>
  )
}



