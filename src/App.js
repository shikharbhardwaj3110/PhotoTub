import axios from "axios";
import React, {useState} from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import Nav from "./components/Nav";
import './App.css'

function App() {

  const [searchTitle, setsearchTitle] = useState('')
  const [imageResult , setimageResult] = useState([])

  const fetchImages = async (query) => {
    setsearchTitle(query)
    console.log("fetch",query)
    const result = await callEndpoint(query)
    console.log(result)
    setimageResult(result.data.results)
    
  }

  const callEndpoint = async (query) => {
    return axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
  }

  const bodyStyle = {
    width : '100vw'
  }

  return (
    <div class="" style={bodyStyle}>
      <Nav/>
      <Header fetchImages={fetchImages}/>
      <Images searchTitle={searchTitle} images={imageResult}/>
    </div>
  );
}

export default App;
