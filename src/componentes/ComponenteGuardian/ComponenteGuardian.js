import React, {useState} from 'react';
import axios from "axios";


const ComponenteGuardian = () => {
    const [palabras,setPalabras]= useState([]);
    const [search,setSearch] = useState("");

    const searchItems = (searchValue) => {
        setSearch(searchValue);
        console.log(searchValue); 
    }

    function searchPalabra(event){
        
            axios.get(`https://content.guardianapis.com/search?q=${search}&api-key=da69eb90-4ff4-41d3-823d-783195276662`)
                .then(res => {
                    console.log(res.data.response.results)
                    setPalabras(res.data.response.results); 
                })
                
    }

    return(
        <div>
            <div className="flex justify-center space-x-6">
                <input className="border-2 border-pink-600 rounded py-2" onChange={(e) => searchItems(e.target.value)} /> 
                <button className="bg-fuchsia-100 rounded-full px-8 py-2" onClick={(e) => searchPalabra(e)}>Search</button>
            </div>
            <div className="container mx-auto py-8 w-50 space-y-6">
                    {
                            palabras.map((palabra,index)=> (
                                <ul key={index}>
                                    <li className="h-14 bg-fuchsia-50 rounded-md"><a href={palabra.webUrl}>{palabra.webTitle}</a></li>     
                                </ul>
                    ))}
            </div>
        </div>
    )
    

}

export default ComponenteGuardian;