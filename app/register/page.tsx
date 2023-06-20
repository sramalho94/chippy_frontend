import Registration from '@/components/Registration'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex flex-col pt-10 min-h-screen">
      <Registration />
    </div>
  )
}

export default page
