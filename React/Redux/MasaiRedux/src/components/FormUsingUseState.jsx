import React, { useState } from 'react'

const FormUsingUseState = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [street, setStreet] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  const userDetails = {name, age, gender, houseNumber, street, lat, long}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userDetails)
  }

  return (
  <form onSubmit={handleSubmit} className='space-y-6'>
        {/* for name */}
      <label htmlFor='name' className='flex gap-2 '>
         <span className='text-lg'>Name: </span>
        <input value={name} id='name' onChange={(e) => setName(e.target.value)} className='border p-1 ' type="text" placeholder='Enter Your Name' />
      </label>

      {/* for age */}
      <label htmlFor='age' className='flex gap-2 '>
         <span className='text-lg'>Age: </span>
        <input value={age} id='age' onChange={(e) => setAge(e.target.value)} className='border p-1 ' type="text" placeholder='Enter Your Age' />
      </label>

       {/* for Gender */}
       <label htmlFor='gender' className='flex gap-2 '>
         <span className='text-lg'>Gender: </span>
        <select value={gender} id="gender" className='border p-1' onChange={(e)=> setGender(e.target.value)}>
            <option className='bg-black' value="">Select Gender</option>
            <option className='bg-black' value="male">Male</option>
            <option className='bg-black' value="female">Female</option>
            <option className='bg-black' value="others">Others</option>
        </select>
      </label>

      {/* address HN */}
      <label htmlFor='houseNumber' className='flex gap-2 '>
         <span className='text-lg'>houseNumber: </span>
        <input value={houseNumber} id='houseNumber' onChange={(e) => setHouseNumber(e.target.value) } className='border p-1 ' type="text" placeholder='House Number' />
      </label>

      {/* street */}
      <label htmlFor='street' className='flex gap-2 '>
         <span className='text-lg'>street: </span>
        <input value={street} id='street' onChange={(e) => setStreet(e.target.value)} className='border p-1 ' type="text" placeholder='street' />
      </label>

      {/* cordinates lats */}
      <label htmlFor='lat' className='flex gap-2 '>
         <span className='text-lg'>Latitude: </span>
        <input value={lat} id='lat' onChange={(e) => setLat(e.target.value)} className='border p-1 ' type="text" placeholder='Enter Latitudes' />
      </label>

       {/* cordinates longs */}
       <label htmlFor='long' className='flex gap-2 '>
         <span className='text-lg'>Longitude: </span>
        <input value={long} id='long' onChange={(e) => setLong(e.target.value)} className='border p-1 ' type="text" placeholder='Enter Longitudes' />
      </label>



      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormUsingUseState
