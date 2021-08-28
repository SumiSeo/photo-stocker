import React,{useState, useEffect} from "react";

const SearchBar = ({onFormSubmit})=>{  

    useEffect(()=>{
        onFormSubmit("architecture");
    },[])
    const [query, setQuery] = useState("");
    const onSubmit = (e)=>{
        e.preventDefault();
        onFormSubmit(query);
    }
    const onInputChange = (e)=>{
        setQuery(e.target.value);
    }

    return (
        <div className="search"> 
            <form 
            onSubmit = {onSubmit}
            className="search__form">
                 <input 
                 value = {query}
                 onChange = {onInputChange}
                 className="search__input" 
                 type="text" 
                 placeholder ="search..." />
            </form> 
        </div>
    )
};

export default SearchBar;