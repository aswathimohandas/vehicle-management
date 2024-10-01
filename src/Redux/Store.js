import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from "./VehicleSlice";

const vehicleStore=configureStore({
    reducer:{
        vehicleReducer:vehicleSlice
    }
})

export default vehicleStore