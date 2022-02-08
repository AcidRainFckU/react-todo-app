import { Todo } from '../../types'

export const addTask = (text: string, checked: boolean) => {
  return {
    type: 'ADD_TUSK',
    payload: {
      text,
      complited: checked,
    },
  }
}

export const removeTask = (id: number) => {
  return { type: 'REMOVE_TUSK', payload: { id } }
}

export const completeAllTusk = (complited: boolean) => {
  return { type: 'COMPLETE_ALL_TUSK', payload: { complited } }
}

export const editTask = (id: number, text: string) => {
  return { type: 'EDIT_TASK', payload: { id, text } }
}

export const clearTusk = {
  type: 'CLEAR_TUSKS',
}

export const fetchTasks = (data: Todo[]) => {
  return { type: 'SET_TASKS', payload: { data } }
}
