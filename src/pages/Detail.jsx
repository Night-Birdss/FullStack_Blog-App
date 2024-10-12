import React from 'react'
import { useSelector } from 'react-redux'

const Detail = () => {

    const {singleblog} = useSelector((state)=>state.blog)
    console.log(singleblog)
  return (
    <div>
      
    </div>
  )
}

export default Detail
