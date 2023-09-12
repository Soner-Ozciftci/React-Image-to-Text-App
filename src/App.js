import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("Notion,an app that every Youtuber is bragging about.Youtube is filled with productivity setups,tutorials and videos on how to use it efficiently.");

const handleChange = e => {
  setSelectedImage(e.target.files[0])
}

  return (
    <div className="App">
      <h1>Image to Text App</h1>
      <p>Get words in image !</p>
<div className="input-wrapper">
  <label htmlFor="upload">Upload Image</label>
  <input type="file" id="upload" accept="image/*" onChange={handleChange}/>
</div>


<div className="result">
{selectedImage && (
<img src={URL.createObjectURL(selectedImage)} alt="thumbnail"/>
)}
{
textResult && (
  <div className="box-p">
    <p>{textResult}</p>
  </div>
)
}
</div>
    </div>
  );
}

export default App;
