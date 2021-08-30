import React,{useState, useEffect} from "react";

const slides = document.querySelectorAll(".founder__box");
slides.forEach((slide, i)=>{
        console.log(slide);
        slide.style.transform = `translateX((${i * 100})%)`;
});
    
    let curSlide = -1;
    
const Founder = ()=>{
    
    const [index, setSelectedIndex] = useState(0);
    // 

    const onLeftClick = () =>{
        console.log("hi");
    };

    //Nest Slide
    const maxSlide = slides.length;
    const onClick = ()=>{
        console.log("hi");
        setSelectedIndex(index+1);
        if(index = maxSlide) {
            setSelectedIndex(0);
        } else{
            slides.forEach((slide, i)=>{
                console.log(slide);
                slide.style.transform = `translateX(${100 * (i-index)}%)`;
        });
    };

       
        // if(curSlide === maxSlide-1){
        //     curSlide = 0;
        // } else{
        //     curSlide++;
        //     slides.forEach((slide, i)=>{
        //     console.log(slide);
        //     slide.style.transform = `translateX(${100 * (i-curSlide)}%)`;
        // })
        // }
        


    };
   

    return (
        <div className="founder">
            <div className="founder__container">
                <div 
                onClick={onClick}
                className="arrow">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div 
                onClick={onLeftClick}
                className="arrow">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="founder__box">
                    <div className="founder__column founder__img1"> </div>
                    <div className="founder__column">
                        <div className="double__quotes">
                        <i className="fas fa-quote-left"></i>
                        </div>
                        <p className="double__hello">
                        Hello, I am Sumi 😄
                        <br></br>
                        I am Full-stack developer who 
                        has proficiency including both frontend and backend work — HTML/SCSS, JavaScript, React, PHP, SQL, and third-party APIs. 
                        </p>
                    </div>

                   
                </div>

{/* //////////////////////////////////// */}
                <div className="founder__box">
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

                {/* ///////////////////////
                 */}
                <div className="founder__box">
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

            
            
        </div>
        
    )
   



};


export default Founder;