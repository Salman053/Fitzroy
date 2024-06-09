import React from 'react'

function Button({children,className,parentClassName,type ,onClick}) {
  return (
    <div data-aos="zoom-out" data-aos-easing="ease-in-out" data-aos-offset="200" data-aos-duration="3000" className={`inline-flex self-start  border hover:outline-offset-1    hover:outline-darkBlue  trans border-DarkGray ${parentClassName}  `}>
      <button type={type} onClick={onClick} className={` md:text-xl border px-3  bg-transparent  uppercase hover:bg-DarkGray hover:text-white trans cursor-pointer   border-DarkGray text-DarkGray inline  font-bold py-1 text-md ${className}   `}>{children?children:"Button"}</button>
    </div>
  )
}

export default Button