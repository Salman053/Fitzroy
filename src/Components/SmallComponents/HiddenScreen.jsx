import React, { useEffect } from 'react'

function HiddenScreen({children ,ClassName}) {

  return (
    <div className={`  trans fixed   min-w-[100vw] min-h-[100vh]  top-0 lef-0  z-40  bg-DarkGray ${ClassName}`}>
<div className="">
{children}
</div>
    </div>
  )
}

export default HiddenScreen