import React from 'react'

const Heading = ({totalLength, completed, progress}) => {
  return (
    <h3 className="mt-7 sm:mt-10 mb-2 sm:mb-4 text-xs sm:text-lg text-zinc-500 font-medium italic flex">
          Tasks  <p className='text-red-400'>({totalLength})</p> - completed <p className='text-red-400'>({completed})</p> - haven't finished yet <p className='text-red-400'>({progress})</p> 
    </h3>
  )
}

export default Heading