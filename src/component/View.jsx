import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllvideoApi } from '../services/allApi'
import { UpdateCategoryApi } from '../services/allApi'





function View({addVideoStatus,setDragOut}) {
  const[allVideo,setAllVideos] = useState([])
  const[deleteVideoStatus,setDeleteVideoStatus]=useState([])
  //---------------------------------------------------------------
  //--------------------------------------------------------------
  const getAllvideo = async()=>{
    const result =await getAllvideoApi()
    // console.log(result);
    setAllVideos(result.data)
  }
  const dragOver=(e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const result = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(result);
    const selectedCategory = result.categoryDeatails 
    const newDeatails = selectedCategory.allVideos.filter((item)=>item.id!=result.videoId)
    console.log(newDeatails);

    const reqBody = {
      categoryName:selectedCategory.categoryName,
      allVideos:newDeatails,
      id:selectedCategory.id
    }
    const response = await UpdateCategoryApi(selectedCategory.id,reqBody)
    console.log(response);
    if (response.status>=200 && response.status<300){
      setDragOut(true)
    }
  }

  
  console.log(allVideo);
  useEffect(()=>{
    getAllvideo()

  },[addVideoStatus,deleteVideoStatus,])
  return (
    <>
     <div className="row w-100" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      <h4 className=''>All videos</h4>
    { allVideo? allVideo?.map((item)=>(<div className="col-md-3 mt-4">
        <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </div>)) :
     <p className='text-danger fs-4'>Nothing to display</p>
}
     </div>
    </>
  )
}

export default View