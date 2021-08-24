import React from "react";

const ImageList = ({images}) => {
    const hoverImage = (s) => {
        const blackBox = document.createElement("div");
        blackBox.classList.add("black__box");
        document.querySelector(".image__box").appendChild(blackBox);
    }
    const imagesArr = images.map((image)=>{
        return (
            <div 
            onMouseEnter={hoverImage}
            key={image.id} 
            className="image__box">
                <img alt={image.description} src= {image.urls.small}/>
            </div>
        )
        
   
    })
    return(
        <div className="image__container">

                {imagesArr}
                
        </div>
    )




};


export default ImageList;