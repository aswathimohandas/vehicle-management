import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import Vehicles from '../components/Vehicles'
import AddVehicle from '../components/AddVehicle'

function Home() {
  return (
    <>
     <div className='container-fluid' style={{height:''}}>
   <Row>
      <Col sm={12} md={2}>
        <AddVehicle/>
      </Col>
      <Col sm={12} md={10}>
      <Vehicles/>
      </Col>
      

    </Row>
   </div>
    </>
  )
}

export default Home
