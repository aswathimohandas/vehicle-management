import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>

      <div className='p-4 d-flex align-items-center' style={{ height: '80vh'}}>
        <div className='w-75 shadow p-3 justify-content-center align-items-center' style={{ marginLeft: "100px" }}>
          <Row>
            <Col className='cols=6' sm={12} md={12}>
              <h3 className='text-center text-primary m-5'><i className="fa-solid fa-car fa-xl" style={{color: "#B197FC",}} />
                Vehicle Management</h3>
              <div className='text-center'>
                <Link to={'/home'} className='btn btn-outline-success'>Let's Go</Link>


              </div>
            </Col>
          </Row>

        </div>


      </div>
      <h3 className='text-center text-danger p-3 fs-2'>Features</h3>
      <div className='d-flex justify-content-around p-5'>

        <Card style={{ width: '18rem' }} sm={12} md={6}>
          <Card.Img variant="top" height={'200px'} src="https://cdnsm5-ss10.sharpschool.com/UserFiles/Servers/Server_415374/Image/News/2016/September/Update%20Contact%20Information.jpg" />
          <Card.Body>
            <Card.Title className='text-warning text-bolder fs-3'>Update Vehicle</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} sm={12} md={6}>
          <Card.Img variant="top" height={'200px'} src="https://icons.iconarchive.com/icons/ampeross/qetto-2/256/add-contact-icon.png" />
          <Card.Body>
            <Card.Title className='text-warning text-bolder fs-3'>Add Vehicles </Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} sm={12} md={6}>
          <Card.Img variant="top" height={'200px'} src="https://www.mobikin.com/d/file/data-clean/delete-contacts-on-android.jpg" />
          <Card.Body>
            <Card.Title className='text-warning text-bolder fs-3'>Remove Vehicles</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Landing

