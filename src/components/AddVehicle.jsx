import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVehicle } from '../Redux/VehicleSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function AddVehicle() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()

    const [data,setData]=useState({
      id:"",category:"",number:"",model:"",img:''
    })


    const handleAdd=()=>{
      const {id,category,number,model,img}=data
      if(!id || !category || !number || !model || !img){
        toast.warning('enter valid inputs')
      }
      else{
        console.log(data);
        dispatch(addVehicle(data))
        handleClose()
        toast.success('vehicle added successfully')
        
      }
      
    }
  return (
   <>
   <div>
    <button className='btn btn-outline-success m-3' onClick={handleShow}>Add Vehicle</button>
   </div>
   <Modal
        show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingPassword" label="id" onChange={(e)=>{setData({...data,id:e.target.value})}}>
        <Form.Control type="text" placeholder="id of vehicle" className='mb-3 text-info' />
      </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="category" onChange={(e)=>{setData({...data,category:e.target.value})}}>
        <Form.Control type="text" placeholder="Category of vehicle" className='mb-3 text-info' />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="number" onChange={(e)=>{setData({...data,number:e.target.value})}} >
        <Form.Control type="text" placeholder="Vehicle Number" className='mb-3 text-info' />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="model" onChange={(e)=>{setData({...data,model:e.target.value})}}>
        <Form.Control type="text" placeholder="Model of vehicle" className='mb-3 text-info' />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="image" onChange={(e)=>{setData({...data,img:e.target.value})}}>
        <Form.Control type="text" placeholder="image address of vehicle" className='mb-3 text-info' />
      </FloatingLabel>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default AddVehicle
