import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FloatingLabel } from "react-bootstrap";
import { uploadVideoAPI } from "../services/allApi";



const Add = ({setVideoUploadResponse}) => {
  const[videoDetails,setVedioDetails]=useState({caption:"",url:"",link:""})
console.log(videoDetails);

  const[isInvalidLink,setIsInvalidLink]=useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbeddedLink=(YouTubeLink)=>
  {
    if(YouTubeLink.includes("v="))
    {
        const videoId=YouTubeLink.split("v=")[1].slice(0,11)
        // console.log(videoId);
        setVedioDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
        setIsInvalidLink(false)
    }
    else 
    {
      console.log("invalid youtube link");
      setVedioDetails({...videoDetails,link:""})
      setIsInvalidLink(true)
    }
  }
  const handleUploadVideo= async ()=>
  {
    const{caption,url,link}=videoDetails
    if(caption && url && link)
    {
      // alert("Call Api")
     try{
      const response= await uploadVideoAPI(videoDetails)
      // console.log(response);
      if(response.status>=200 && response.status<300)
      {
        handleClose()
        setVedioDetails({...videoDetails,caption:"",url:"",link:""})
        setVideoUploadResponse(response.data)
        alert("Video uploaded successfully")
      }
      
      
     }
     catch(err){
        console.log(err);
        
     }
    }
    else 
    {
      alert("Please fill all the fields")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button
          onClick={handleShow}
          className="btn btn-warning ms-3 rounded-circle fs-5 fw-bolder"
        >
          +
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Video Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="border rounded p-3">
              <FloatingLabel
                controlId="floatingInputCaption"
                label="Video Caption"
                className="mb-3"
              >
                <Form.Control onChange={e=>setVedioDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputUrl"
                label="Image URL"
                className="mb-3"
              >
                <Form.Control onChange={e=>setVedioDetails({...videoDetails,url:e.target.value})}  type="text" placeholder="Image URL" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputLink"
                label="Youtube Link"
                className="mb-3"
              >
                <Form.Control onChange={e=>getEmbeddedLink(e.target.value)} type="text" placeholder="Youtube Link" />
              </FloatingLabel>
              {isInvalidLink &&
              <div  className="mt-3 text-danger fw-bolder">
              Invalid Youtube Link
              </div>
              }
            </div>{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUploadVideo} variant="btn btn-info" >
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Add;
