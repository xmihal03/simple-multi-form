import { FormWrapper } from '../FormWrapper'

type ThirdStepData = {
  password: string
}

type ThirdStepProps = ThirdStepData & {
  updateFormValues: (fields: Partial<ThirdStepData>) => void
}

export function ThirdStep({ password, updateFormValues }: ThirdStepProps) {
  return (
    <FormWrapper title="Third Step">
      <label>Password</label>
      <input
        type="password"
        autoFocus
        required
        value={password}
        onChange={(e) => updateFormValues({ password: e.target.value })}
      />
    </FormWrapper>
  )
}
