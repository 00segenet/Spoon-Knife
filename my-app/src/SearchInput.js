import React from "react"
import "./SearchInput.css"
import logo from "./logo.svg"
 
const SearchInput =()=>{
    
    return(
        <div id="searchInp"> 
            <input id="SearchInputstyle" type="text"  placeholder="Search..."/>
            <img src={logo}/>
        </div>
    )
}
export default SearchInput