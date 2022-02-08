import { Paper, Divider, Button, List } from '@mui/material'
import React from 'react'
import { AddField } from './components/AddField'
import { Item } from './components/Item'
import { useSelector, useDispatch } from 'react-redux'

import { Reducer, Todo } from './types'
import Filter from './components/Filter'
import {
  clearTusk,
  completeAllTusk,
  editTask,
  fetchTasks,
} from './redux/actions/tasks'

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector((state: Reducer) => state.tasks)
  const filterBy = useSelector((state: Reducer) => state.filterBy)

  React.useEffect(() => {
    const localComments = JSON.parse(localStorage.getItem('tasks') || '[]')
    dispatch(fetchTasks(localComments))
  }, [])

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const celarState = () => {
    if (window.confirm('Удалить все задачи?')) {
      dispatch(clearTusk)
    }
  }
  const handleCompleteAllTusk = (complited: boolean) => {
    dispatch(completeAllTusk(complited))
  }

  const handleEditTask = (id: number, text: string) => {
    dispatch(editTask(id, text))
  }

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {tasks
            .filter((obj: Todo) => {
              if (filterBy == 'all') {
                return true
              } else if (filterBy == 'completed') {
                return obj.complited
              } else if (filterBy == 'active') {
                return !obj.complited
              }
            })
            .map((item: Todo) => (
              <Item
                text={item.text}
                key={item.id}
                id={item.id}
                complited={item.complited}
                editTask={handleEditTask}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          {tasks.some((task: Todo) => task.complited === false) ? (
            <Button
              disabled={!tasks.length}
              onClick={() => handleCompleteAllTusk(true)}
            >
              Отметить всё
            </Button>
          ) : (
            <Button
              disabled={!tasks.length}
              onClick={() => handleCompleteAllTusk(false)}
            >
              Снять отметки
            </Button>
          )}
          <Button disabled={!tasks.length} onClick={celarState}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default App
