import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Profiles = () => {
  const profiles = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 23 },
  ];
  return (
    <div className="flex gap-48">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-7xl">The Profiles</h1>
        {profiles.map(({ name, age }, index) => (
          <NavLink className={({isActive})=> (isActive && "text-red-500")} key={index} to={`/profiles/${name}`}>
            <p >
              {name}: {age}
            </p>
          </NavLink>
        ))}
      </div>
      <div className="mt-24">
      <Outlet/>
      </div>
    </div>
  );
};

export default Profiles;
