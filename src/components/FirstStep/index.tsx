import { FormWrapper } from '../FormWrapper'
import { FormData } from '../../types'

type FirstStepProps = {
  formInputData: FormData[][]
  updateFormValues: (fields: Partial<FormData>) => void
}

export function FirstStep({ formInputData, updateFormValues }: FirstStepProps) {
  const [firstName, lastName, email] = formInputData[0].map(
    (data) => data.value
  )

  return (
    <FormWrapper title="First Step">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) =>
          updateFormValues({ id: 'firstName', value: e.target.value })
        }
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) =>
          updateFormValues({ id: 'lastName', value: e.target.value })
        }
      />
      <label>Email</label>
      <input
        type="email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={email}
        onChange={(e) =>
          updateFormValues({ id: 'email', value: e.target.value })
        }
      />
    </FormWrapper>
  )
}
