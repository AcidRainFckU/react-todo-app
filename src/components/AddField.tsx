import { TextField, Button, Checkbox } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '../redux/actions/tasks'

export const AddField = () => {
  const dispatch = useDispatch()

  const [text, setText] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  function handleClickAdd(event: any) {
    event.preventDefault()
    dispatch(addTask(text, checked))
    setText('')
    setChecked(false)
  }

  return (
    <form className="field" onSubmit={handleClickAdd}>
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <TextField
        variant="standard"
        placeholder="Введите текст задачи..."
        fullWidth
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">
        <AddIcon />
      </Button>
    </form>
  )
}
