import { Tabs, Tab } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import { Reducer } from '../types'
import { setCategory } from '../redux/actions/filter'

const filterIndex = ['all', 'active', 'completed']

const Filter = () => {
  const dispatch = useDispatch()
  const filterBy = useSelector((state: Reducer) => state.filterBy)

  const setFilter = (_: any, newIndex: any) => {
    const status = filterIndex[newIndex]
    dispatch(setCategory(status))
  }
  return (
    <>
      <Tabs onChange={setFilter} value={filterIndex.indexOf(filterBy)}>
        <Tab label="Все" />
        <Tab label="Активные" />
        <Tab label="Завершённые" />
      </Tabs>
    </>
  )
}

export default Filter
