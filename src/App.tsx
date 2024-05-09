import { FormEvent, useState } from 'react'
import { FirstStep } from './components/FirstStep'
import { SecondStep } from './components/SecondStep'
import { ThirdStep } from './components/ThirdStep'
import { useMultiForm } from './hooks/useMultiForm'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  password: string
}

const initData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  password: '',
}

function App() {
  const [formInputData, setFormInputData] = useState(initData)

  function updateFormValues(inputFormValues: Partial<FormData>) {
    setFormInputData((prevValues) => {
      return { ...prevValues, ...inputFormValues }
    })
  }

  const {
    formSteps,
    currentFormStepIdx,
    formStep,
    next,
    back,
    isTheFirstStep,
    isTheLastStep,
  } = useMultiForm([
    <FirstStep {...formInputData} updateFormValues={updateFormValues} />,
    <SecondStep {...formInputData} updateFormValues={updateFormValues} />,
    <ThirdStep {...formInputData} updateFormValues={updateFormValues} />,
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isTheLastStep) {
      return next()
    }
    alert('Success')
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="relative top-2 left-2 bg-gray-200 p-8 rounded-lg shadow-lg min-w-[600px] min-h-[500px]"
      >
        {formStep}
        <div className="flex justify-end mr-10 mt-10 gap-4">
          {!isTheFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="submit">{isTheLastStep ? 'Finish' : 'Next'}</button>
        </div>
        <div className="absolute bottom-5 left-0 right-0 mx-auto text-center">
          {`${currentFormStepIdx + 1} / ${formSteps.length}`}
        </div>
      </form>
    </div>
  )
}

export default App
