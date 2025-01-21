import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",  // Center-align the content
        width: "100%",         // Set the container to take full width
        padding: "20px",  
            // Add padding for better spacing
      }}
    >
      <h1 style={{ textAlign: "center" }}>404 Not Found!</h1>
      
      <Link to="/" style={{ width: "fit-content" }}>
        <button 
          style={{ 
            backgroundColor: 'blue', 
            width: 'fit-content', 
            padding: '10px 20px', 
            fontSize: '16px',
            color:'white' 
          }}
        >
          Back To Home Link
        </button>
      </Link>

      <a href="/" style={{ width: "fit-content" }}>
        <button 
          style={{ 
            backgroundColor: 'blue', 
            width: 'fit-content', 
            padding: '10px 20px', 
            fontSize: '16px',
            color:'white' 

          }}
        >
          Back To Home with a tag
        </button>
      </a>
    </div>
  );
};

export default NotFoundPage;
