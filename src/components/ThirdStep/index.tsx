import { FormWrapper } from '../FormWrapper'
import { FormData } from '../../types'

type ThirdStepProps = {
  formInputData: FormData[][]
  updateFormValues: (fields: Partial<FormData>) => void
}

export function ThirdStep({ formInputData, updateFormValues }: ThirdStepProps) {
  const [password] = formInputData[2].map((data) => data.value)
  return (
    <FormWrapper title="Third Step">
      <label>Password</label>
      <input
        type="password"
        autoFocus
        required
        value={password}
        onChange={(e) =>
          updateFormValues({ id: 'password', value: e.target.value })
        }
      />
    </FormWrapper>
  )
}
