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
    id?: number
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
      if (action.payload?.id) {
        return state.filter((tusk) => tusk.id !== action.payload.id)
      } else {
        return []
      }
    case 'CHANGE_COMPLITED':
      if (action.payload?.id) {
        return state.map((tusk) => {
          if (tusk.id === action.payload.id) {
            return { ...tusk, complited: !tusk.complited }
          } else {
            return tusk
          }
        })
      } else {
        if (!action.payload.complited) {
          return state.map((tusk) => {
            return { ...tusk, complited: false }
          })
        } else {
          return state.map((tusk) => {
            return { ...tusk, complited: true }
          })
        }
      }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  const removeTask = (id?: number) => {
    if (id) {
      if (window.confirm('Удалить задачу?')) {
        dispatch({ type: 'REM_TUSK', payload: { id } } as SetAction)
      }
    } else {
      if (window.confirm('Удалить все задачи?')) {
        dispatch({ type: 'REM_TUSK' } as SetAction)
      }
    }
  }
  const togleCheck = (id?: number, complited?: boolean) => {
    dispatch({
      type: 'CHANGE_COMPLITED',
      payload: { id, complited },
    } as SetAction)
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
              key={item.id}
              id={item.id}
              complited={item.complited}
              removeTask={removeTask}
              togleCheck={togleCheck}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={() => removeTask()}>Очистить</Button>

          {state.every((el) => el.complited) ? (
            <Button onClick={() => togleCheck(undefined, false)}>
              Убрать все отметки
            </Button>
          ) : (
            <Button onClick={() => togleCheck(undefined, true)}>
              Отметить всё
            </Button>
          )}
        </div>
      </Paper>
    </div>
  )
}

export default App
