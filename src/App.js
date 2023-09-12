import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  return (
    <div className="App">
      <h1>Image to Text App</h1>
      <p>Get words in image !</p>
<div className="input-wrapper">
  <label htmlFor="upload">Upload Image</label>
  <input type="file" id="upload" accept="image/*"/>
</div>


<div className="result">
{selectedImage && (
<img src={selectedImage} />

)}
</div>
    </div>
  );
}

export default App;
