import React,{useState, useEffect} from "react";
import Main from "../sass/main.scss";

//Components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Navigation from "./Navigation";



import axios from "axios";


//Api 
const API_KEY = "0YBRQldRxa3BdyJCjkPMCI9rZnP5yfGr8Eq2_G1x2wQ";

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
            <header>
                <Navigation/>
            </header>
            <div>
                <SearchBar onFormSubmit = {onFormSubmit}/>
                    <ImageList images={imageList}/>
            </div>
        </div>
    )


}

export default App;