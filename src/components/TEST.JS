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
            slide.style.transform = `translateX(${i * 100}%) `;
            
    });

    },[])
    const [index, setSelectedIndex] = useState(0);
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
                
                    <div className="founder__box">
                        <div className="founder__inside">
                            <div className="founder__column founder__img1"> </div>
                            <div className="founder__column">
                                <div className="double__quotes">
                                <i className="fas fa-quote-left"></i>
                                </div>
                                <p className="double__hello">
                                Hello, I am Sumi 😄
                                <br></br>
                                I am a Full-stack developer who 
                                has proficiency including both frontend and backend work — HTML/SCSS, JavaScript, React, PHP, SQL, and third-party APIs. 
                                </p>
                            </div>
                        </div>
                        {/* <!--Second start--> */}
                        <div className="founder__inside">
                            <div className="founder__column founder__img2"> </div>
                            <div className="founder__column">
                                <div className="double__quotes">
                                <i className="fas fa-quote-left"></i>
                                </div>
                                <p className="double__hello">
                                I love creating things from scratch 🤩
                                <br></br>
                                I graduated Korea National University of Arts.  I made several short-films, wrote disseration about an art.
                                All these experiences drove me to find a way to do web development.

                                </p>
                            </div>
                        </div>
                        <div className="founder__inside">
                            <div className="founder__column founder__img3"> </div>
                            <div className="founder__column">
                                <div className="double__quotes">
                                <i className="fas fa-quote-left"></i>
                                </div>
                                <p className="double__hello">
                                I am a team player 🤓
                                <br></br>
                                Since I have the background in design and marketing, I have followed the history of web development.
                                I enjoy to be on a team and build innovative things together.
                                </p>
                            </div>
                        </div>
                    </div>

{/* //////////////////////////////////// */}
                  

                {/* ///////////////////////
                 */}
                   
                
            </div>

            
            
        </div>
        
    )
   



};


export default Founder;