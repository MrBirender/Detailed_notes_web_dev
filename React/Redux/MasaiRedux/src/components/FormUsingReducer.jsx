import React, { useEffect, useReducer } from 'react'
import '../App.css';

/* reducer and inital state */
const initialState  = {
    name: '',
    age: '',
    gender: '',
    address: {
        houseNumber: '',
        street: '',
        cordinates: {
            lat: '',
            long: '',
        }
    }
}

function reducer(state, action){
    switch(action.type){
        case 'updateName':
        case 'updateAge':
        case 'updateGender': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'updateStreet':
        case 'updateHouseNumber': {
            return {
                ...state,
                address: {
                    ...state.address,
                    ...action.payload
                }
            }
        }

        case 'updateLong':
        case 'updateLat': {
            return {
                ...state,
                address: {
                    ...state.address,
                    cordinates: {
                        ...state.address.cordinates,
                        ...action.payload
                    }
                }
            }
        }

        
        default: {
            throw new Error('please define the valid action type')
        }
           
    }
}
const FormUsingReducer = () => {
    const [userDetails, dispatch] = useReducer(reducer, initialState)

    // useEffect(()=> {
    //     console.log(userDetails)
    // },[])

  /* on form submit */
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userDetails)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
        {/* for name */}
      <label htmlFor='name' className='flex gap-2 '>
         <span className='text-lg'>Name: </span>
        <input id='name' onChange={(e) => dispatch({type:'updateName', payload:{[e.target.id]: e.target.value}})} className='border p-1 ' type="text" placeholder='Enter Your Name' />
      </label>

      {/* for age */}
      <label htmlFor='age' className='flex gap-2 '>
         <span className='text-lg'>Age: </span>
        <input id='age' onChange={(e) => dispatch({type:'updateAge', payload:{[e.target.id]: e.target.value}})} className='border p-1 ' type="text" placeholder='Enter Your Age' />
      </label>

       {/* for Gender */}
       <label htmlFor='gender' className='flex gap-2 '>
         <span className='text-lg'>Gender: </span>
        <select id="gender" className='border p-1' onChange={(e)=> dispatch({type:'updateGender', payload: {[e.target.id]: e.target.value}})}>
            <option className='bg-black' value="">Select Gender</option>
            <option className='bg-black' value="male">Male</option>
            <option className='bg-black' value="female">Female</option>
            <option className='bg-black' value="others">Others</option>
        </select>
      </label>

      {/* address HN */}
      <label htmlFor='houseNumber' className='flex gap-2 '>
         <span className='text-lg'>houseNumber: </span>
        <input id='houseNumber' onChange={(e) => dispatch({type:'updateHouseNumber', payload:{[e.target.id]: e.target.value}})} className='border p-1 ' type="text" placeholder='House Number' />
      </label>

      {/* street */}
      <label htmlFor='street' className='flex gap-2 '>
         <span className='text-lg'>street: </span>
        <input id='street' onChange={(e) => dispatch({type:'updateStreet', payload:{[e.target.id]: e.target.value}})} className='border p-1 ' type="text" placeholder='street' />
      </label>

      {/* cordinates lats */}
      <label htmlFor='lat' className='flex gap-2 '>
         <span className='text-lg'>Latitude: </span>
        <input id='lat' onChange={(e) => dispatch({type:'updateLat', payload:{[e.target.id]: e.target.value}})} className='border p-1 ' type="text" placeholder='Enter Latitudes' />
      </label>

       {/* cordinates longs */}
       <label htmlFor='long' className='flex gap-2 '>
         <span className='text-lg'>Longitude: </span>
        <input id='long' onChange={(e) => dispatch({type:'updateLong', payload:{[e.target.id]: e.target.value}})} className='border p-1 ' type="text" placeholder='Enter Longitudes' />
      </label>



      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormUsingReducer
