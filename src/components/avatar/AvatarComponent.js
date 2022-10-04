
import React, { useState } from 'react'


const AvatarComponent = ({detail}) => {
  const [open, setOpen] = useState(false);
   function onhanldeCLick(){
      setOpen(prev => !prev)
   }
  return (
    <nav>
    <ul>
      <div className="display-picture"> <img onClick={onhanldeCLick} src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt=""/></div>

      </ul>
      <div className={(!open) ? "hidden" : "card-profile"}>
        <ul>
          <li><h4>{detail.firstName} {detail.lastName}</h4></li>
          <li><h4>{detail.email}</h4></li>
          <li><h4>ID :{detail.id}</h4></li>
        
        </ul>
      </div>
  </nav>
  )
}
     
export default AvatarComponent
