import React from 'react'

function Heading({heading,className}) {
  return (
    <h2 className={`md:text-3xl font-semibold italic text-xl tracking-widest ${className}`}>{heading?heading:Heading}</h2>
  )
}

export default Heading