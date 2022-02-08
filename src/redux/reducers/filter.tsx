import { SetAction } from '../../types'

const initialState = 'all'

export function filterReducer(state: string = initialState, action: SetAction) {
  switch (action.type) {
    case 'CATEGORY':
      return action.payload.text
    default:
      return state
  }
}
