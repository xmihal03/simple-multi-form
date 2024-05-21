import { FormData } from './types'

export function updateValueById(
  prevValues: FormData[][],
  inputFormValues: Partial<FormData>
) {
  const updatedData = [...prevValues]
  for (let i = 0; i < updatedData.length; i++) {
    for (let j = 0; j < updatedData[i].length; j++) {
      if (inputFormValues.id === updatedData[i][j].id) {
        updatedData[i][j].value = inputFormValues.value || ''
      }
    }
  }
  return updatedData
}
