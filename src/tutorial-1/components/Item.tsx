import React from 'react'
import { IconButton, Checkbox, ListItem, Typography } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

type Props = {
  text: string
  dispatch: any
  complited: boolean
  id: number
}
export const Item: React.FC<Props> = ({ text, dispatch, complited, id }) => {
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
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            onClick={() => dispatch({ type: 'REM_TUSK', payload: { id } })}
          >
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  )
}
