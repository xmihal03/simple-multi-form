import { FormWrapper } from '../FormWrapper'
import { FormData } from '../../types'

type SecondStepProps = {
  formInputData: FormData[][]
  updateFormValues: (fields: Partial<FormData>) => void
}

export function SecondStep({
  formInputData,
  updateFormValues,
}: SecondStepProps) {
  const [phone, address] = formInputData[1].map((data) => data.value)

  return (
    <FormWrapper title="Second Step">
      <label>Phone</label>
      <input
        type="number"
        autoFocus
        required
        value={phone}
        onChange={(e) =>
          updateFormValues({ id: 'phone', value: e.target.value })
        }
      />
      <label>Address</label>
      <input
        type="text"
        required
        value={address}
        onChange={(e) =>
          updateFormValues({ id: 'address', value: e.target.value })
        }
      />
    </FormWrapper>
  )
}
