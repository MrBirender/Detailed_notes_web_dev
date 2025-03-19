import React, { useState } from "react";

const FormUsingUstateObject = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    gender: "",
    address: {
      houseNumber: "",
      street: "",
      coordinates: {
        lat: "",
        long: "",
      },
    },
  });

  const {
    name,
    age,
    gender,
    address: { houseNumber, street, coordinates: { lat, long } },
  } = userDetails;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserDetails((prevDetails) => {
      if (id === "houseNumber" || id === "street") {
        return {
          ...prevDetails,
          address: {
            ...prevDetails.address,
            [id]: value,
          },
        };
      }

      if (id === "lat" || id === "long") {
        return {
          ...prevDetails,
          address: {
            ...prevDetails.address,
            coordinates: {
              ...prevDetails.address.coordinates,
              [id]: value,
            },
          },
        };
      }

      return {
        ...prevDetails,
        [id]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <label htmlFor="name" className="flex gap-2">
        <span className="text-lg">Name:</span>
        <input
          value={name}
          id="name"
          onChange={handleChange}
          className="border p-1"
          type="text"
          placeholder="Enter Your Name"
        />
      </label>

      {/* Age */}
      <label htmlFor="age" className="flex gap-2">
        <span className="text-lg">Age:</span>
        <input
          value={age}
          id="age"
          onChange={handleChange}
          className="border p-1"
          type="text"
          placeholder="Enter Your Age"
        />
      </label>

      {/* Gender */}
      <label htmlFor="gender" className="flex gap-2">
        <span className="text-lg">Gender:</span>
        <select value={gender} id="gender" className="border p-1" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </label>

      {/* Address - House Number */}
      <label htmlFor="houseNumber" className="flex gap-2">
        <span className="text-lg">House Number:</span>
        <input
          value={houseNumber}
          id="houseNumber"
          onChange={handleChange}
          className="border p-1"
          type="text"
          placeholder="House Number"
        />
      </label>

      {/* Address - Street */}
      <label htmlFor="street" className="flex gap-2">
        <span className="text-lg">Street:</span>
        <input
          value={street}
          id="street"
          onChange={handleChange}
          className="border p-1"
          type="text"
          placeholder="Street"
        />
      </label>

      {/* Coordinates - Latitude */}
      <label htmlFor="lat" className="flex gap-2">
        <span className="text-lg">Latitude:</span>
        <input
          value={lat}
          id="lat"
          onChange={handleChange}
          className="border p-1"
          type="text"
          placeholder="Enter Latitude"
        />
      </label>

      {/* Coordinates - Longitude */}
      <label htmlFor="long" className="flex gap-2">
        <span className="text-lg">Longitude:</span>
        <input
          value={long}
          id="long"
          onChange={handleChange}
          className="border p-1"
          type="text"
          placeholder="Enter Longitude"
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormUsingUstateObject;
