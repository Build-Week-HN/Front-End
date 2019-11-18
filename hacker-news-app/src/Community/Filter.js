import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    padding: 20px 0px 25px;;
    margin: 0px auto;
    background-color: #A9E1FF;
    
`;

function Filter(props){

        return(
            <Container>
               <label> Date Posted:
                   <input type="date" />
               </label>
               <label> Keyword:
                   <input type="text" />
               </label>
               <label> Author:
                   <input type="text" />
               </label>
            </Container>
        )
}

export default Filter;