import { TextField, Button, Checkbox } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useState } from 'react'

type Props = {
  dispatch: any
}

export const AddField: React.FC<Props> = ({ dispatch }) => {
  const [text, setText] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  function addTusk(event: any) {
    event.preventDefault()
    dispatch({ type: 'ADD_TUSK', payload: { text, complited: checked } })
    setText('')
    setChecked(false)
  }

  return (
    <form className="field" onSubmit={addTusk}>
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
