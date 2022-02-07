import React from 'react'
import { IconButton, Checkbox, ListItem, Typography } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

type Props = {
  text: string
  complited: boolean
  id: number
  removeTask: (id: number) => void
  togleCheck: (id: number) => void
}
export const Item: React.FC<Props> = ({
  text,
  complited,
  id,
  removeTask,
  togleCheck,
}) => {
  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={complited}
          onClick={() => togleCheck(id)}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={() => removeTask(id)}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  )
}
