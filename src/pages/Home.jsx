import React, { useState } from 'react'
import Add from '../component/Add'
import View from '../component/View'
import Category from '../component/Category'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




function Home() {
  const [addVideoStatus,setAddvideoStatus]=useState()
  const [dragOut,setDragOut] =useState(false)
  return (
    <>
    <div className='d-flex p-5'>
      <Add setAddvideoStatus={setAddvideoStatus}/>
      <h5 className='ms-auto'><Link to='/watchhistory' style={{TextDecoder:'non',color:'white'}} >Watch History<FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>

    </div>
    <div className="row w-100 p-4">
      <div className="col-md-9">
       <View addVideoStatus={addVideoStatus} setDragOut ={setDragOut} />
      </div>
      <div className="col-md-3 p-4">
        <Category setDragOut={setDragOut} dragOut={dragOut}/>

      </div>
    </div>
    </>
  )
}

export default Home