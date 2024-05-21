import { FormEvent, useState } from 'react'
import { FirstStep } from './components/FirstStep'
import { SecondStep } from './components/SecondStep'
import { ThirdStep } from './components/ThirdStep'
import { useMultiForm } from './hooks/useMultiForm'
import { updateValueById } from './utils'
import { FormData } from './types'

const initData: FormData[][] = [
  [
    {
      id: 'firstName',
      value: '',
    },
    {
      id: 'lastName',
      value: '',
    },
    {
      id: 'email',
      value: '',
    },
  ],
  [
    {
      id: 'phone',
      value: '',
    },
    {
      id: 'address',
      value: '',
    },
  ],
  [
    {
      id: 'password',
      value: '',
    },
  ],
]

function App() {
  const [formInputData, setFormInputData] = useState(initData)

  function updateFormValues(inputFormValues: Partial<FormData>) {
    setFormInputData((prevValues) =>
      updateValueById(prevValues, inputFormValues)
    )
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
    <FirstStep
      formInputData={formInputData}
      updateFormValues={updateFormValues}
    />,
    <SecondStep
      formInputData={formInputData}
      updateFormValues={updateFormValues}
    />,
    <ThirdStep
      formInputData={formInputData}
      updateFormValues={updateFormValues}
    />,
  ])

  function clearAllFormInputs() {
    setFormInputData(initData)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isTheLastStep) {
      return next()
    }
    alert('Success')
    clearAllFormInputs()
  }

  function clearInputFormStep() {
    setFormInputData((prevValues) => {
      const updatedData = [...prevValues]
      const currentStepData = updatedData[currentFormStepIdx]
      for (let i = 0; i < currentStepData.length; i++) {
        currentStepData[i].value = ''
      }
      return updatedData
    })
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
        <button type="button" onClick={clearInputFormStep}>
          Clear
        </button>
      </form>
    </div>
  )
}

export default App
