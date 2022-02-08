import { IconButton, Checkbox, ListItem, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import React from 'react'
import { useDispatch } from 'react-redux'

import { removeTask } from '../redux/actions/tasks'

type Props = {
  text: string
  complited: boolean
  id: number
  editTask: (id: number, text: string) => void
}
export const Item: React.FC<Props> = ({ editTask, text, complited, id }) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    if (window.confirm('Удалить задачу?')) {
      dispatch(removeTask(id))
    }
  }

  const handleEdit = () => {
    const edit: string | null = window.prompt()
    if (edit) {
      editTask(id, edit)
    }
  }

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={complited}
          onClick={() =>
            dispatch({ type: 'CHANGE_COMPLITED', payload: { id } })
          }
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton onClick={handleEdit}>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={handleRemoveClick}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  )
}
