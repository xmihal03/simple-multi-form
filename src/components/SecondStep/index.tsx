import { FormWrapper } from '../FormWrapper'

type SecondStepData = {
  phone: string
  address: string
}

type SecondStepProps = SecondStepData & {
  updateFormValues: (fields: Partial<SecondStepData>) => void
}
export function SecondStep({
  phone,
  address,
  updateFormValues,
}: SecondStepProps) {
  return (
    <FormWrapper title="Second Step">
      <label>Phone</label>
      <input
        type="number"
        autoFocus
        required
        value={phone}
        onChange={(e) => updateFormValues({ phone: e.target.value })}
      />
      <label>Address</label>
      <input
        type="text"
        required
        value={address}
        onChange={(e) => updateFormValues({ address: e.target.value })}
      />
    </FormWrapper>
  )
}
