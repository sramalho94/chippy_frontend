import LoginForm from '@/components/LoginForm'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col pt-10 min-h-screen">
        <LoginForm />
    </div>
  )
}

export default page