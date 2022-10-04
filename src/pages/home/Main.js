import React, { useEffect, useState }  from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import LayoutMain from '../../layout/LayoutMain'

 
function Main() {

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(true)
        }, 3000);
    }, [isLoading])
  return (
    <div>
    {!isLoading ? <Loader/> :
      <LayoutMain>
        <Outlet/>
      </LayoutMain> 
      }
    </div>
  )
}

export default Main
