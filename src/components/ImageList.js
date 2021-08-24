import React from "react";

const ImageList = ({images}) => {
    const blackBox = document.createElement("div");
    blackBox.classList.add("black__box");
    

    const hoverImage = (e) => {
        const div = e.target.nextSibling;
        div.classList.remove("hidden");

    }
    const mouseLeave = (e) => {
        const div = e.target.nextSibling;
        div.classList.add("hidden");

    }
    const imagesArr = images.map((image)=>{
        return (
            <div 
            key={image.id} 
            className="image__box">
                <img 
                onMouseLeave={(e)=>{mouseLeave(e)}}
                onMouseEnter={(e)=>{hoverImage(e)}} alt={image.description} src= {image.urls.small}/>
                <div className="black__box hidden"></div>
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