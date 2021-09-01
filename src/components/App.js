import React,{useState, useEffect} from "react";
import Main from "../sass/main.scss";

//Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Accordion from "./Accordion";
import Route from "./Route";
import Founder from "./Founder";
import Header from "./Header";



//Api and thirdparty libraries
import axios from "axios";
const API_KEY = "0YBRQldRxa3BdyJCjkPMCI9rZnP5yfGr8Eq2_G1x2wQ";

/////////////////////////////////

const items = [
    {
        title : "What is this application for ? ",    
        content : "You can find all the images depending on your needs.",
        icon : "fas fa-arrow-circle-down",

    },
    {
        title : "Which stack is used in this application ?",    
        content : "I used predominantly React Hooks, SCSS and third-party API.",
        icon:  "fas fa-arrow-circle-down",
    },

    {
        title : "Who made this application?",    
        content : "Hi :) I am Sumi. I am a Full-stack developer. You can check my git hub here 👉 https://github.com/SumiSeo",
        icon : "fas fa-arrow-circle-down",
    }

];






/////////////////////////////////
const App = ()=>{
    const [imageList, setImageList ] = useState([]);

  
   

    const onFormSubmit = async (query)=>{
        console.log(query);
        const data = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`,{
            params: {
                per_page:40,

            }
        });
        console.log(data.data.results);
        setImageList(data.data.results);
    }
   
    return (
        <div>
            <div className="nav">
                <Header/>
            </div>
            <div className="body__container">
                <Route 
                path="/">
                    <SearchBar onFormSubmit = {onFormSubmit}/>
                    <ImageList images={imageList}/>
                </Route>

                <Route 
                path="/about">
                    <Accordion items={items}/>
                </Route>
                <Route 
                path="/founder">
                    <Founder />
                </Route>
            </div>
                   
           
        </div>
    )


}



export default App;