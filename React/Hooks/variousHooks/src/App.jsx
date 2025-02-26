import React from "react";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="absolute h-full flex flex-col gap-12 items-center justify-center w-full bg-black   text-white text-2xl">
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
