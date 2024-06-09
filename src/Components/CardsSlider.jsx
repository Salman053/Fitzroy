import React from 'react'
import Card from './Card'

function CardsSlider() {
  return (
    <div className='flex scrollbar-hide  min-h-[40vh] gap-3 mb-5 px-4 overflow-x-auto overflow-y-hidden  '>
      <Card Content={`Botswana`} />
      <Card Content={`zimbabwe`} img={'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0JTIwYW5pbWFsfGVufDB8fDB8fHww'}/>
      <Card Content={`rwanda`} img={'https://images.unsplash.com/photo-1640481929532-1db2df2284b8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvcmVzdCUyMG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D'}/>
    </div>
  )
}

export default CardsSlider