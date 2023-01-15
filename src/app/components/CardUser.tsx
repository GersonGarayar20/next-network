import React from 'react'

const CardUser = () => {
  return (
    <li className='flex  items-center gap-3 border-[1px] p-4  sm:border-b-[2px] sm:border-zinc-900'>
      <img src="https://randomuser.me/api/portraits/men/40.jpg" className="w-10 h-10 rounded-full" alt="" />
      <span>Esteban Salas Sulca</span>
    </li>
  )
}

export default CardUser