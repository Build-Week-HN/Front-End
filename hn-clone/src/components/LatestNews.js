import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
/* box-shadow: 5px black; */
background-color: #effffa;
text-transform: uppercase;
padding: 5px;
border-radius: 5px;


`

const LatestNews = (props) => (
  <Header>
    
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <p>{props.author}</p>
    <p>{props.comment_count}</p>
      {/* <Image src = {props.url} />  */}
  
  </Header>

)



export default LatestNews;