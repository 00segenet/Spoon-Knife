import React from "react"
import TitleText from "./TitleText"
import SearchInput from "./SearchInput"
import MountainButton from"./MountainButton"
import GallerySection from "./GallerySection"
import BeachButton from "./BeachButton"
import BirdButton from "./BirdButton"
import landOne from "./landOne.jpg"
import landTwo from "./landTwo.jpg" 
import landThree from "./landThree.jpg"

import ContactButton from "./ContactButton"

import "./App.css"

const App=()=>{
  return (
    <div>

      <TitleText></TitleText>
      <SearchInput></SearchInput>

      <div id="ft">
              
            <MountainButton></MountainButton>
            <BeachButton>
              
               </BeachButton>
            <BirdButton></BirdButton>
            <ContactButton></ContactButton>
        </div>    
      <div>   
              
              <GallerySection> 
              </GallerySection>
              <GallerySection></GallerySection>
              <GallerySection></GallerySection>
              <GallerySection></GallerySection>
              <GallerySection></GallerySection>
              <GallerySection></GallerySection>
              <GallerySection></GallerySection>
              <GallerySection></GallerySection>
        </div>
      </div>
    
  )
}
export default App