import React, { useState, useEffect } from "react";

import axios from "axios";

// import LatestNews from "./components/LatestNews";


function App() {
  const [hnData, sethnData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://bw-hackernews.herokuapp.com/posts",
      );
      // console.log(result)
      sethnData(result.data);
    }
    fetchData();
}, []);


  return (
    <div>{
  hnData.map((curr, index) => {
      return(
          <div key={index}>
              <h1>{curr.title}</h1>
              </div>
      );
  })
  }</div>
)
  
  }  

export default App;

