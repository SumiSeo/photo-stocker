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
                <div className="black__box hidden">
                    <div className="black__box--infos">
                        <img className="black__box--profile" src ={image.user.profile_image.medium}/>
                        <h6 className="black__box--user">{image.user.first_name}</h6>
                    </div>
                    <div className="black__box--bookmark">
                        <h6 className="black__box--likes"> <i className="fas fa-bookmark"></i> {image.user.total_likes}</h6>
                    </div>
                   
                </div>
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