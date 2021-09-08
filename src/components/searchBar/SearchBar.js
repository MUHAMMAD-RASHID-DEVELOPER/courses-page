import React from "react";
import Search from "search-react-input";
const SearchBar = ({courses,onChangeHandler,capturedSearch}) => {
  return (
    <div className="App">
       
      <div
        className="container"
        style={{ marginTop: "5vh", display: "flex", justifyContent: "center" }}
      >
        <Search
          options={courses}
          onChange={(option) => onChangeHandler(option)}
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

export  default SearchBar;
