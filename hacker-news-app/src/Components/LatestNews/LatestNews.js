import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
/* box-shadow: 5px black; */
background-color: #effffa;
text-transform: capitalize;
padding: 5px;
border-radius: 5px;
-webkit-box-shadow: 38px 36px 6px -29px rgba(209,201,209,1);
-moz-box-shadow: 38px 36px 6px -29px rgba(209,201,209,1);
box-shadow: 38px 36px 6px -29px rgba(209,201,209,1);
color: #1a3e59;
font-family: italic;
&:hover {
  background: rgba(210,255,82,1);
  background: -moz-linear-gradient(left, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 61%, rgba(145,232,66,1) 100%);
  cursor: pointer;
}
`

const LatestNews = (props) => (
  <Header>
    
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <p>{props.author}😃</p>
    <p>{props.comment_count}💬</p>
    <p>{props.url}</p>


      {/* <Image src = {props.url} />  */}
  
  </Header>

)


export default LatestNews;