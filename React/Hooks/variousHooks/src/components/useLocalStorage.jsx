import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setvalue] = useState(
    localStorage.getItem(key)
      ? localStorage.getItem(key)
      : initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setvalue];
};

export default useLocalStorage;
