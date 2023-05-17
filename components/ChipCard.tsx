import React from 'react'

function ChipCard() {
  return (
    <>
      <div className='lg:p-4 md:w-full flex justify-center mt-40'>
        <div className='max-w-sm rounded-2xl'>
          <img className='w-full' src='/app/assets/chippycopy.png' alt='bag of chips' />

          <div className='px-6 py-4 lg:h-52'>
            <span className='tracking:widest text-xs title-font font-medium text-gray-400 mb-1'>Chip Card</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChipCard