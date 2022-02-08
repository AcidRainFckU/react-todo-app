import { createStore, combineReducers } from 'redux'

import { filterReducer } from './reducers/filter'
import { tasksReducer } from './reducers/tasks'
import { Reducer } from '../types'

const rootReducer = combineReducers<Reducer>({
  filterBy: filterReducer,
  tasks: tasksReducer,
})

const store = createStore(rootReducer)

export default store
