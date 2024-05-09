import { FormWrapper } from '../FormWrapper'

type FirstStepData = {
  firstName: string
  lastName: string
  email: string
}

type FirstStepProps = FirstStepData & {
  updateFormValues: (fields: Partial<FirstStepData>) => void
}
export function FirstStep({
  firstName,
  lastName,
  email,
  updateFormValues,
}: FirstStepProps) {
  return (
    <FormWrapper title="First Step">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFormValues({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFormValues({ lastName: e.target.value })}
      />
      <label>Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => updateFormValues({ email: e.target.value })}
      />
    </FormWrapper>
  )
}
