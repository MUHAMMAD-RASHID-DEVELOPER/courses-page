import { ViewArrayOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import Search from "search-react-input";
import UseBar from "./UseBar"

const courses = [
  { label: "Web Development", value: "Web" },
  { label: "Mobile Application Development", value: "Mobile" },
  { label: "Software Development", value: "Software" },
  { label: "Certified Computer Operator", value: "CCO" },
  { label: "Graphic Designer", value: "Graphic" },
  { label: "UI/UX Designer", value: "UI/UX" },
  { label: "Mobile Repairing", value: "Mobile" },
  { label: "Computer Hardware Repairing", value: "Computer" }
];

const Bar = () => {
  const [capturedSearch, setCapturedSearch ,course] = useState(null);
  // const [setCapturedSearch, capturedSearch] = useState();

  return (
    <div className="App">
       
      <div
        className="container"
        style={{ marginTop: "5vh", display: "flex", justifyContent: "center" }}
      >
        <Search
          options={courses}
          onChange={(option, e) => setCapturedSearch(option)}
        />
      </div>
      
      
      
      <div style={{ marginTop: "5vh", textAlign: "center" }}>
        <h1>
          {capturedSearch && "Hello and welcome to " + capturedSearch.label+" "+"Course"}
        </h1>
        <h1>          
      
        {/* {console.log(capturedSearch && capturedSearch.label)} */}
        
</h1>
      </div>


    </div>
  );
};

export  default Bar;
