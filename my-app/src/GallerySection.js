import React from "react"
import mountain from "./mountain.jpg"
import "./GallerySection.css"
   
const GallerySection =()=>{
    return (
        <div id="Gallery">
            <div id="image">
            <img src={mountain} />
            </div>
        </div>
    )
}
export default GallerySection