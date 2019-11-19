import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
 
import LatestNews from "./components/LatestNews";
import Wrapper from "./components/Wrapper";
import HeaderText from "./components/HeaderText";

const theme = {
  font: "Calibri"
};

// import GlobalStyles from "./components/GlobalStyles";


function App() {
  const [hnData, sethnData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://bw-hackernews.herokuapp.com/posts",
      );
      console.log(result)
      sethnData(result.data);
    }
    fetchData();
  }, []);


  return (
    <section>
      {hnData.map((curr, index) => {
        return (
          
          <ThemeProvider theme={theme}>
            
            <Wrapper>
            <HeaderText>Latest News:</HeaderText>
          <LatestNews
            key={index}
            text={curr.text}
            title={curr.title}
            author={curr.author}
            comment_count={curr.comment_count}
            url={curr.url}
          />
            </Wrapper>
            </ThemeProvider>
        )
      })}
            
    </section>);
}
export default App;
