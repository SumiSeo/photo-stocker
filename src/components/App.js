import React,{useState, useEffect} from "react";
import Main from "../sass/main.scss";

//Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from "axios";


//Api 
const API_KEY = "0YBRQldRxa3BdyJCjkPMCI9rZnP5yfGr8Eq2_G1x2wQ";

const App = ()=>{
  
    const onFormSubmit = async (query)=>{
        console.log(query);
        const data = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`)
        console.log(data);

    }

    return (
        <div>
            <SearchBar onFormSubmit = {onFormSubmit}/>
            <ImageList />
        </div>
    )


}

export default App;