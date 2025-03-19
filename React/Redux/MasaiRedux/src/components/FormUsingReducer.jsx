import React, { useReducer } from 'react';

const initialState = {
    name: '',
    age: '',
    gender: '',
    address: {
        houseNumber: '',
        street: '',
        coordinates: {
            lat: '',
            long: '',
        }
    }
};

function reducer(state, action) {
    const { field, value } = action.payload;

    if (field.includes('.')) {
        // Handle nested fields dynamically (e.g., address.houseNumber or address.coordinates.lat)
        const keys = field.split('.');
        return {
            ...state,
            [keys[0]]: {
                ...state[keys[0]],
                ...(keys.length === 2
                    ? { [keys[1]]: value }
                    : {
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: value
                        }
                    })
            }
        };
    }

    return { ...state, [field]: value };
}

const FormUsingReducer = () => {
    const [userDetails, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            payload: { field: e.target.name, value: e.target.value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    };

    const { name, age, gender, address: { houseNumber, street, coordinates: { lat, long } } } = userDetails;

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Name */}
            <label className='flex gap-2'>
                <span className='text-lg'>Name: </span>
                <input value={name} name='name' onChange={handleChange} className='border p-1' type="text" placeholder='Enter Your Name' />
            </label>

            {/* Age */}
            <label className='flex gap-2'>
                <span className='text-lg'>Age: </span>
                <input value={age} name='age' onChange={handleChange} className='border p-1' type="text" placeholder='Enter Your Age' />
            </label>

            {/* Gender */}
            <label className='flex gap-2'>
                <span className='text-lg'>Gender: </span>
                <select value={gender} name="gender" className='border p-1' onChange={handleChange}>
                    <option className='bg-black' value="">Select Gender</option>
                    <option className='bg-black' value="male">Male</option>
                    <option className='bg-black' value="female">Female</option>
                    <option className='bg-black' value="others">Others</option>
                </select>
            </label>

            {/* House Number */}
            <label className='flex gap-2'>
                <span className='text-lg'>House Number: </span>
                <input value={houseNumber} name='address.houseNumber' onChange={handleChange} className='border p-1' type="text" placeholder='House Number' />
            </label>

            {/* Street */}
            <label className='flex gap-2'>
                <span className='text-lg'>Street: </span>
                <input value={street} name='address.street' onChange={handleChange} className='border p-1' type="text" placeholder='Street' />
            </label>

            {/* Latitude */}
            <label className='flex gap-2'>
                <span className='text-lg'>Latitude: </span>
                <input value={lat} name='address.coordinates.lat' onChange={handleChange} className='border p-1' type="text" placeholder='Enter Latitude' />
            </label>

            {/* Longitude */}
            <label className='flex gap-2'>
                <span className='text-lg'>Longitude: </span>
                <input value={long} name='address.coordinates.long' onChange={handleChange} className='border p-1' type="text" placeholder='Enter Longitude' />
            </label>

            <button type='submit' className='p-2 bg-blue-500 text-white'>Submit</button>
        </form>
    );
};

export default FormUsingReducer;
