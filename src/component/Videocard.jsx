import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {  addVideoHistoryApi, deleteVideoApi } from '../services/allApi';



function Videocard({video,setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
    const caption = video?.caption
    const url = video?.embedLink
    const time= new Date()
    const timeStamp= new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(timeStamp);
    const reqBody ={
      caption,url,timeStamp
    }

   const result= await addVideoHistoryApi(reqBody)
   console.log(reqBody);
  }

  const handleDelete=async(id)=>{
  const result= await  deleteVideoApi(id)
  setDeleteVideoStatus(result.data)
  }
  const videoDrag=(e,video)=>{
    // console.log(typeof(id));
    // console.log(`drag video is ${id}`);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }
  return (
    <>
     <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-4'>
{  !isPresent && <Card.Img variant="top"  onClick={handleShow} src={video?.imageUrl} height={'300px'} />
}      <Card.Body>
       <div className='justify-content-between d-flex'>
          <Card.Text>{video?.caption}</Card.Text>
          
            
          
         { !isPresent && <Button variant="danger" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrash} /></Button>}
       </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="480" src={`${video?.embedLink}?autoplay=1`} title="Maheshinte Prathikaaram | Mounangal Song Video | Fahadh Faasil, Aparna Balamurali | Official" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard