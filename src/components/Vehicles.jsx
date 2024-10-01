import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import Edit from './Edit';
import { useParams } from 'react-router-dom';
import { deleteVehicles } from '../Redux/VehicleSlice';




function Vehicles() {

  const {vehicles} = useSelector((state)=>state.vehicleReducer)
  
  const [ data,setData ] = useState()

  const dispatch=useDispatch()
  const { id } = useParams()
  console.log(id);

 
  

  


  return (
   <>
   

  <div className='border m-5'>
    

    <h4 className='text-center text-info fw-bolder fs-3 '>Vehicles</h4>
    
   
    <div className='row'>
    {
      vehicles ?.length>0 ?
      vehicles ?.map(item=>(
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item?.img} className='d-flex img-fluid' />
      <Card.Body>
      
          <Card.Title className='text-center text-primary text-bolder' >{item?.category}</Card.Title>
          <div className='d-flex justify-content-between text-info'>
         
          <Card.Text>
            {item?.number}
          </Card.Text>
          <Card.Text>
            {item?.model}
          </Card.Text>
       </div>
        <div className='d-flex justify-content-around'>
        <Edit edit={item}/>
        <button className='btn' onClick={()=>{dispatch(deleteVehicles(item?.id))}}><i className="fa-solid fa-trash" size="xl" style={{color: "#e10510",}} /></button>
         
        </div>
      </Card.Body>
    </Card>
    ))
    :
    <h2>No Vehicles Available</h2>
    }
    </div>
  
    </div>
   
   </>
  )
}

export default Vehicles
