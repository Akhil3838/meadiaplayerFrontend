import { faTrash,faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  deletevideoHistoryApi, getVideoHistoryApi } from '../services/allApi'





function Watchhistory() {


  const[allVideo,setAllVideo]=useState([])
  const getVideoHistory = async()=>{
    const result = await getVideoHistoryApi()
    if(result.status>=200 && result.status<300){
      setAllVideo(result.data)
    }
  }
  console.log(allVideo);
  const handleDeletevideo = async(id)=>{
      await deletevideoHistoryApi(id)
      getVideoHistory()
  }
  useEffect(()=>{
    getVideoHistory()
  },[])
    
    
    
  
  return (
    <> 
    <div className="row w-100 my-5">
<div className='d-flex justify-content-between p-md-5'>
  <h5>Watch History</h5>
  </div>
  <h5><Link to='/home' style={{textDecoration:'non',color:'white'}}><span className='hide'>Back Home</span><FontAwesomeIcon icon={faHouse} /></Link></h5>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h5 className='text-center'>Watch History</h5>
{ allVideo.length>0? <table className='table mt-5'>
            <thead>
              <tr>
                <th>sl.no</th>
                <th>caption</th>
                <th>Url</th>
                <th>TimeStamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {allVideo?.map((item,index)=>(<tr video={item}>
                <td>{index+1}</td>
                <td>{item.caption}</td>
                <td><Link to={item.url} target='_blank'>{item.url}</Link></td>
                <td>{item.timeStamp}</td>
                <td><button className='btn btn-danger'onClick={()=>handleDeletevideo(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
              </tr>))}
            </tbody>
          </table>
        :  <p className='text-danger fa-3'>no Watchhistory</p>
}       
 </div>
        <div className="col-md-2"></div>
  
</div>   
    </>
  )
}

export default Watchhistory