import React from 'react'

function Input({type,className,onClick,placeholder}) {
  return (
    <input type={`${type?type:'text'}`} placeholder={`${placeholder?placeholder:'Placeholder'}`} className={` focus-within:outline-none z-10  border-t-0 border-l-0 border-r-0 bg-transparent placeholder:text-white text-white text-xl border-b-2 border-white py-1  px-1 ${className} ` }/>
  )
}

export default Input