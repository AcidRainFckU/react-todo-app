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
  REMOVE_TUSK = 'REMOVE_TUSK',
  CHANGE_COMPLITED = 'CHANGE_COMPLITED',
  CLEAR_TUSKS = 'CLEAR_TUSKS',
  COMPLETE_ALL_TUSK = 'COMPLETE_ALL_TUSK',
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
    case 'REMOVE_TUSK':
      return state.filter((tusk) => tusk.id !== action.payload.id)

    case 'CHANGE_COMPLITED':
      return state.map((tusk) => {
        if (tusk.id === action.payload.id) {
          return { ...tusk, complited: !tusk.complited }
        } else {
          return tusk
        }
      })
    case 'CLEAR_TUSKS':
      return []
    case 'COMPLETE_ALL_TUSK':
      return state.map((task) => {
        return { ...task, complited: action.payload.complited }
      })

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  const celarState = () => {
    if (window.confirm('Удалить все задачи?')) {
      dispatch({ type: 'CLEAR_TUSKS' } as SetAction)
    }
  }
  const completeAllTusk = (complited: boolean) => {
    dispatch({ type: 'COMPLETE_ALL_TUSK', payload: { complited } } as SetAction)
  }

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
          {state.some((task) => task.complited === false) ? (
            <Button onClick={() => completeAllTusk(true)}>Отметить всё</Button>
          ) : (
            <Button onClick={() => completeAllTusk(false)}>
              Снять отметки
            </Button>
          )}
          <Button onClick={celarState}>Очистить</Button>
        </div>
      </Paper>
    </div>
  )
}

export default App
