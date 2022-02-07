import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material'
import { useReducer } from 'react'
import { AddField } from './components/AddField'
import { Item } from './components/Item'

type Todo = {
  id: number
  text: string
  complited: boolean
}

enum Action {
  ADD_TUSK = 'ADD_TUSK',
  REM_TUSK = 'REM_TUSK',
  CHANGE_COMPLITED = 'CHANGE_COMPLITED',
}

type SetAction = {
  type: Action
  payload: {
    id: number
    text: string
    complited: boolean
  }
}

function reducer(state: Todo[], action: SetAction) {
  switch (action.type) {
    case 'ADD_TUSK':
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
          text: action.payload.text,
          complited: action.payload.complited,
        },
      ]
    case 'REM_TUSK':
      return state.filter((tusk) => tusk.id !== action.payload.id)
    case 'CHANGE_COMPLITED':
      return state.map((tusk) =>
        tusk.id === action.payload.id
          ? { ...tusk, complited: !tusk.complited }
          : tusk
      )
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField dispatch={dispatch} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((item: Todo) => (
            <Item
              text={item.text}
              dispatch={dispatch}
              key={item.id}
              id={item.id}
              complited={item.complited}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  )
}

export default App
