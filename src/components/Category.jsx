
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FloatingLabel } from "react-bootstrap";
import { addCategoryAPI,getAllCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from "../services/allApi";
import VideoCard from './VideoCard'

const Category = ({setRemoveVideoResponseFromCategory,removeVideoResponseFromView}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  [categoryName, setCategoryName] = useState("");
  const[allCategories,setAllCategories]=useState([])


useEffect(()=>{getAllCategory()},[removeVideoResponseFromView])

  const handleAddCategory=async()=>
  {
    if(categoryName)
    {
      const categoryDetails={categoryName,allVideos:[]}
      await addCategoryAPI(categoryDetails)
      handleClose()
      setCategoryName("");
      getAllCategory()
    }
    else{
      alert("Please enter category name")
    }
  }
const getAllCategory=async ()=>{
  const  response=await getAllCategoryAPI()
  setAllCategories(response.data)

}
// console.log(allCategories);

const deleteCategory=async(id)=>
{
  await removeCategoryAPI(id)
  getAllCategory()
}
const dragOverCategory=(e)=>  //this event is an unwanted evented in browser that is prevented in  this function
{
  e.preventDefault()
}

const videoDropOverCategory= async(e,categoryID)=>
{
  const videoId=e.dataTransfer.getData("id")
  // console.log(`video Id:${videoId} dropped inside category id :${categoryID}`);
  //add video into category

  //get dropping video details-call api
  const {data} =await getSingleVideoAPI(videoId)
  console.log(data);

  //get details dropping category and insert videoDetails of category allVideos

  const selectedCategory=allCategories?.find(item=>item.id==categoryID)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  //update selected  category into json file-call api
  await updateCategoryAPI(categoryID,selectedCategory)

  //remove video from allVideos-call api
  const response=await removeVideoAPI(videoId)

  //pass response to view component
  setRemoveVideoResponseFromCategory(response)
  //get all updated categories
  getAllCategory()
  
  
  
}

const categoryVideoDragStart=(e,categoryId,video)=>
{
  console.log(`video with is ${video.id} from category id:${categoryId} has started dragging`);
  let dataShare={categoryId,video}
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  
}

  return (
    <>
    <div className="d-flex justify-content-around">
      <h3>All Categories</h3>
      <button onClick={handleShow} className="btn btn-warning rounded-circle fs-5 fw-bolder">+</button>
    </div>
<div className="container-fluid mt-3">
      {
        allCategories?.length>0?
        allCategories?.map(categoryDetails=>(
          <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoDropOverCategory(e,categoryDetails?.id)} className="border rounded p-3 mb-2">
          <div className="d-flex justify-content-between">
              <h5>{categoryDetails?.categoryName}</h5>
              <button onClick={()=>deleteCategory(categoryDetails?.id)} className="btn">< i className="fa-solid fa-trash text-danger"></i></button>

          </div>
          {/* { ecah category videos} */}
          <div className="row mt-5">
            {
              categoryDetails?.allVideos?.length>0 &&
              categoryDetails?.allVideos?.map(video=>(
                <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,categoryDetails?.id,video)} className="col-md-4 " key={video?.id}>
                      <VideoCard displayData={video} insideCategory={true} />
                  </div>
              ))
            }
          </div>
      </div>
        ))

        :
        <div className="text-danger fw-bolder">No categories added yet</div>
      }

</div>


    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Category Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            
              <FloatingLabel
                controlId="floatingInputName"
                label="Category Name"
                className="mb-3"
              >
                <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
              </FloatingLabel>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="btn btn-info" onClick={handleAddCategory}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      

    
    
    </>
  )
}

export default Category