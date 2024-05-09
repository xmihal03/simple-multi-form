import { ReactNode } from 'react'

interface FormWrapperProps {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h1>{title}</h1>
      <div
        className="grid gap-x-5 gap-y-3 justify-center"
        style={{ gridTemplateColumns: 'auto minmax(auto, 350px)' }}
      >
        {children}
      </div>
    </>
  )
}
