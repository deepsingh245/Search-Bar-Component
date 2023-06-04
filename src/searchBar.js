import React, { useState } from "react";
import data from "./sample.json";
import "./search.css";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };
  const highlightSearchString = (text, searchString) => {
    if (!searchString) {
      return text;
    }

    const regex = new RegExp(`(${searchString})`, "gi");
    return text.replace(regex, "<strong>$1</strong>");
  };
  return (
    <div className="App">
      <div className="search">
      <form className="d-flex" role="search" >
        <input className="form-control input-lg"
         type="search" 
         placeholder="Search for securities" 
         aria-label="Search"
         onChange={handleChange}/>
         </form>
    <div className="c2">
        <div className="container mt-2" id="style">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Ticker</th>
      <th scope="col">Exchange</th>
    </tr>
  </thead>
  <tbody>
    {data.filter(items =>{
          if (searchItem === ""){
          return true
        }
          else if(
            items.name.toLowerCase().includes(searchItem.toLowerCase())){
            return true }
            else{
                return false;
            }
        }).map((items, index) => (
                <tr key={index}>
                  <td
                      dangerouslySetInnerHTML={{
                        __html: highlightSearchString(items.name, searchItem),
                      }}
                    ></td>
                  <td>{items.ticker}</td>
                  <td>{items.exchange}</td>
                </tr>             
            ))}
    </tbody>
</table>

        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
