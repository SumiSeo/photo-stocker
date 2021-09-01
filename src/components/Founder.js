import React,{useState, useEffect} from "react";


let slides ;
let maxSlide;
let curSlide = 0;
const Founder = ()=>{
  
    useEffect(()=>{
    slides = document.querySelectorAll(".founder__box");
    console.log(slides);
    maxSlide = slides.length;
    console.log(maxSlide);
    slides.forEach((slide, i)=>{
            console.log(slide);
            console.log(i);
            slide.style.transform = `translateX(${i * 100}%)`;
            
    });

    },[])

    // 

    const onLeftClick = () =>{
        if(curSlide ===0){
            curSlide = maxSlide;
        }
        curSlide--;
        slides.forEach((slide, i)=>{
            console.log(slide);
            console.log(i);
            slide.style.transform = `translateX(${(i-curSlide) * 100}%)`;
        });

    };

    //Nest Slide
    
    const onRightClick = ()=>{
        console.log("clicked");
        if(curSlide === maxSlide-1){
            curSlide = -1;
        }
        else{
            curSlide++;
            slides.forEach((slide, i)=>{
            console.log(slide);
            console.log(i);
            slide.style.transform = `translateX(${(i-curSlide) * 100}%)`;
        });

        }
        
    };

       


    return (
        <div className="founder">
            <div 
                onClick={onRightClick}
                className="arrow">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div 
                onClick={onLeftClick}
                className="arrow">
                    <i className="fas fa-chevron-left"></i>
            </div>
            <div className="founder__container">
        
                    <article className="founder__box">
                        <div className="founder__img1"></div>
                    </article>
                    <article className="founder__box">
                        <div className="founder__img2"></div>
                    </article>
                    <article className="founder__box">
                        <div className="founder__img2"></div>  
                    </article>


                  

              
                
            </div>

           
        </div>
        
    )
   



};


export default Founder;