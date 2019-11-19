import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
/* box-shadow: 5px black; */
background-color: #effffa;
text-transform: uppercase;
padding: 5px;
border-radius: 5px;
-webkit-box-shadow: 1px 9px 30px -4px rgba(0,0,0,0.67);
-moz-box-shadow: 1px 9px 30px -4px rgba(0,0,0,0.67);
box-shadow: 1px 9px 30px -4px rgba(0,0,0,0.67);

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
    <p>{props.author}</p>
    <p>{props.comment_count}</p>
      {/* <Image src = {props.url} />  */}
  
  </Header>

)



export default LatestNews;