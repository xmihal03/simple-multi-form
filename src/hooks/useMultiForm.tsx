import { ReactElement, useState } from 'react'

export function useMultiForm(formSteps: ReactElement[]) {
  const [currentFormStepIdx, setCurrentFormStepIdx] = useState(0)

  function next() {
    setCurrentFormStepIdx((i) => {
      if (i > formSteps.length) {
        return i
      }
      return i + 1
    })
  }
  function back() {
    setCurrentFormStepIdx((i) => {
      if (i === 0) {
        return i
      }
      return i - 1
    })
  }
  function goTo(idx: number) {
    setCurrentFormStepIdx(idx)
  }
  return {
    currentFormStepIdx,
    formStep: formSteps[currentFormStepIdx],
    next,
    back,
    goTo,
  }
}
