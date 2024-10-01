import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { editVehicle } from '../Redux/VehicleSlice';
import { useSelector, useDispatch } from 'react-redux';


function Edit({ edit }) {

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(edit)



  const { vehicles } = useSelector((state) => state.vehicleReducer)
  const dispatch = useDispatch()


  const handleClose = () => setShow(false);
  const handleShow = () => {

    setShow(true);
    // setUpdate(edit)


  }
  // useEffect(() => {
  //   if (edit) {
  //     setUpdate(edit);
  //   }
  // }, []);



  const handleEdit = () => {
    console.log(update)
    dispatch(editVehicle(update))
    handleClose()
  }

  return (
    <>

      <button className='btn' onClick={handleShow}><i className="fa-solid fa-pen-to-square fa-xl" style={{color: "red",}} /></button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingPassword" label="id" >
            <Form.Control type="text" placeholder="id of vehicle" className='mb-3' value={update?.id || ''} onChange={(e) => { setUpdate({ ...update, id: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="category" >
            <Form.Control type="text" placeholder="Category of vehicle" className='mb-3' value={update?.category} onChange={(e) => { setUpdate({ ...update, category: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="number"  >
            <Form.Control type="text" placeholder="Vehicle Number" className='mb-3' value={update?.number} onChange={(e) => { setUpdate({ ...update, number: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="model" >
            <Form.Control type="text" placeholder="Model of vehicle" className='mb-3' value={update?.model} onChange={(e) => { setUpdate({ ...update, model: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="image">
            <Form.Control type="text" placeholder="image address of vehicle" className='mb-3' value={update?.img} onChange={(e) => { setUpdate({ ...update, img: e.target.value }) }} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit

