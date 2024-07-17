import React, { useEffect } from 'react'
import Videocard from './Videocard'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addCategoryApi, getAllCategory, removeCategoryApi, UpdateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



function Category({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
 const [categoryName ,setCategryName]=useState("")
 const [allCategory,setAllCategory]=useState([])
  const [addStatus,setAddstatus]=useState(false)
  const [updateStatus, setUpdateStatus] =useState(false)

  const handleClose = () => {setShow(false);
    setCategryName("")
  }
  const handleShow = () => setShow(true);
  console.log(categoryName);

  const handleCategoryAdd = async()=>{
    if(categoryName){
     const reqBody = {
       categoryName,
       allVideos:[]
     }
     const result = await addCategoryApi(reqBody)
     console.log(result);
     if(result.status>=200 && result.status<300){
      
       setCategryName("")
         handleClose()
         alert('Category added successfully')
         setAddstatus(true)
     }
 
    }
    else{
     alert('please add a category name')
    }
   }
   const getCategory = async()=>{
    const result = await getAllCategory()
    setAllCategory(result.data)
   }
   console.log(allCategory);
   const handleDelete = async(id)=>{
    await removeCategoryApi(id)
    setAddstatus(true)
   }
   const dragOver=(e)=>{
    e.preventDefault()

   }
   const VideoDrop = async(e , selectedCategory)=>{
    console.log('category' ,selectedCategory);
    const vDetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
    // console.log('id : ',videoId);

    if (selectedCategory.allVideos.find(item =>item.id == vDetails.id)) {
      alert("video already in the category")
      
    } else {
      selectedCategory.allVideos.push(vDetails)
      const result = await UpdateCategoryApi(selectedCategory.id, selectedCategory)

      alert("video add successflly")
      console.log(result);
      setUpdateStatus(true)
      
    }
   }

   ondrag = (e,videoId, categoryDeatails) =>{
    console.log(videoId,categoryDeatails);
    const dataShare = { videoId,categoryDeatails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
   }

   useEffect (()=>{
    setAddstatus(false)
    setUpdateStatus(false)
    setDragOut(false)
    getCategory()
   },[addStatus,updateStatus,dragOut])


  return (
    <>
    {/* <h5 className='mt-5 mt-md-0'>category</h5>
    <button className='w-100 mt-4 btn btn-warning'onClick={handleShow}>Add catetgory</button>

    {allCategory?.length>0? allCategory?.map((item)=>(
       <div className='p-3 border rounded mt-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e,item)}>  
        <div className='d-flex justify-content-between'>
          <p className='mb-4'>{item.categoryName}</p>
         <button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(item.id)} /></button>
        </div>
       </div>
        
      ))
    :
    <p className='text-danger mt-5'>No category add yet</p>
    }
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='category name' onChange={(e)=>setCategryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel 
          </Button>
          <Button variant="primary" onClick={handleCategoryAdd}>
            add
          </Button>
        </Modal.Footer>
      </Modal> */}

<h5 className='mt-5 mt-md-0'>Category</h5>
      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>

      {/* <p className='mb-4'>Category Name</p> */}
      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className='p-3 border rounded mt-4' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => VideoDrop(e, item)}>
            <div className='d-flex justify-content-between'>
              <p className='mb-3'>{item.categoryName}</p>
              <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            <div>

            </div>
            {item?.allVideos?.length > 0 ? item?.allVideos.map((video) => (

              <div draggable onDragStart={(e) => ondrag(e, video.id, item)}> <Videocard video={video} isPresent={true} /></div>)) : null}

          </div>
        ))
        :
        <p className='text-danger mt-5'>no category added yet</p>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className='p-3 border-rounded'>
            <input type="text" className='form-control' placeholder='Category Name' onChange={(e) => setCategryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category