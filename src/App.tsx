import { AddNewItem } from "./components/AddNewItem"
import { AppContainer, AppHeader } from "./styles"
import { Column } from "./components/Column"
import { Card } from "./components/Card"

export const App = () => {

  return (
    <>
      <AppHeader>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
      </AppHeader>
      <AppContainer>

        <Column text="To Do">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn TypeScript" />
        </Column>

        <Column text="Done">
          <Card text="Begin to use static Typing" />
        </Column>

      </AppContainer>
    </>
  )
}



