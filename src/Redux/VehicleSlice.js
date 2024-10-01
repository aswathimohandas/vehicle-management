import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const vehicleSlice=createSlice({
    name:'vehicles',
    initialState:{
        vehicles:[],
        
    },
    reducers:{
        addVehicle(state,action){
           state.vehicles.push(action.payload)

        },
        editVehicle(state,action){
            state.vehicles=state.vehicles.filter(item=>item.id!=action.payload.id)
            state.vehicles.push(action.payload)
        },
        
           deleteVehicles(state,action){
            state.vehicles = state.vehicles.filter(item=>(item.id!=action.payload))
           }
       

    }
})

export default vehicleSlice.reducer
export const {addVehicle,editVehicle,deleteVehicles}=vehicleSlice.actions
