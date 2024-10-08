import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { removeVideoAPI, saveHistoryAPI } from '../services/allApi';



const VideoCard = ({displayData,setDeleteVideoResponse,insideCategory}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //call save history api 
    //videoDetails to be stored history
    const {caption,link}=displayData
    const today=new Date()
    const timeStamp=today.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails={caption,link,timeStamp}
    await saveHistoryAPI(videoDetails)
    
  }
  const deleteVideo=async(id)=>
  {
    const result =await removeVideoAPI(id)
    setDeleteVideoResponse(result)
  }
  const videoDragStart=(e,videoID)=>
  {
    // console.log(`video with id ${videoID} has started dragging...`);
     e.dataTransfer.setData("id",videoID)
    
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} style={{ height:'250px'}}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.url} />
      <Card.Body>
       
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
         {!insideCategory && <button onClick={()=>deleteVideo(displayData?.id)}  className='btn'><i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Text>
   
      </Card.Body>
    </Card>
{/* Modal code */}
<Modal show={show} size='lg' centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="360" src={`${displayData?.link}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe></Modal.Body>
     
      </Modal>

    </>
  )
}

export default VideoCard
