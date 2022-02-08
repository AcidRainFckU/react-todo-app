import { SetAction, Todo } from '../../types'

const initialState: Todo[] = []

export function tasksReducer(state: Todo[] = initialState, action: SetAction) {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload.data
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
      return state.filter((tusk: Todo) => tusk.id !== action.payload.id)

    case 'CHANGE_COMPLITED':
      return state.map((tusk: Todo) => {
        if (tusk.id === action.payload.id) {
          return { ...tusk, complited: !tusk.complited }
        } else {
          return tusk
        }
      })
    case 'CLEAR_TUSKS':
      return []
    case 'COMPLETE_ALL_TUSK':
      return state.map((task: Todo) => {
        return { ...task, complited: action.payload.complited }
      })

    case 'EDIT_TASK':
      return state.map((tusk: Todo) => {
        if (tusk.id === action.payload.id) {
          return { ...tusk, text: action.payload.text }
        } else {
          return tusk
        }
      })

    default:
      return state
  }
}
