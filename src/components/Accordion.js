import React,{useState} from "react";



const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setActiveIndex(index);
        console.log(index);
    };
    const eachItem = items.map((item,index)=>{
        const active = (index === activeIndex) ? "active" : "";


        return (
            <div key={index} className="item__box">
                <div className="item__info" >
                    <h2 className="item__title">{item.title}</h2>
                    <div 
                    className={`panel ${active}`}>
                        <p className>{item.content}</p>
                    </div>
                   

                <i 
                onClick={()=>{onTitleClick(index)}}
                className={item.icon}></i>
                </div>
              
                
            </div>
        )
    })
    return(
        <div className="main">
            <div className="item__container">
                <div 
               
                className="about">
                About...</div>
                <div 
                >{eachItem}</div>    

            </div>
        </div>
    )

};



export default Accordion;