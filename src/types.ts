enum Action {
  ADD_TUSK = 'ADD_TUSK',
  REMOVE_TUSK = 'REMOVE_TUSK',
  CHANGE_COMPLITED = 'CHANGE_COMPLITED',
  CLEAR_TUSKS = 'CLEAR_TUSKS',
  COMPLETE_ALL_TUSK = 'COMPLETE_ALL_TUSK',
  CATEGORY = 'CATEGORY',
  EDIT_TASK = 'EDIT_TASK',
  SET_TASKS = 'SET_TASKS',
}

export type Todo = {
  id: number
  text: string
  complited: boolean
}

export type Reducer = {
  tasks: Todo[]
  filterBy: string
}

export type SetAction = {
  type: Action
  payload: {
    id: number
    text: string
    complited: boolean
    data: Todo[]
  }
}
