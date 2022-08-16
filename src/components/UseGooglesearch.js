import React,{useState,useEffect} from 'react'
import API_KEY from './Key'
const CONTEXT_KEY = 'd2a3a8482daad47e5';


function UseGooglesearch(term) {
      const [data,setData] = useState(null);
      useEffect(()=>{
           const fetchData = async () =>{
               fetch(
                   `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`

               )
               .then(res => res.json())
               .then(result => {
                   setData(result)
               })
           }
           fetchData();
      },[term])
      return {data};

}

export default UseGooglesearch