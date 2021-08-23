import React from "react";

const ImageList = ({images}) => {
    const imageList = images.map((image)=>{
        return <img src ={image.urls.small}/>
    })
    return(
        <div className="image__container">
            <div className="image__box">
                {imageList}
            </div>
        </div>
    )




};


export default ImageList;