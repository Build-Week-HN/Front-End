import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';


const Container = styled.div`
    width: calc(100% - 2px);
    max-width: 900px;
    height: 110px;
    margin: 0px auto;
    color: black;
    border: 1px solid #5C94BD;
    text-align:left;
    overflow: scroll;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    margin: 10px auto 0px;
    line-height: 0.5;
`;

const Reaction = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.6;

`;

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-right: 10px;
`;

const Author = styled.p`
    font-size: 0.8rem;
    font-style: italic;
    margin-right: 10px;
`;

const Date = styled.p`
    font-size: 0.6rem;
    position: relative;
    bottom: 10px;
`;

const Comment = styled.p`
    font-size: 0.7rem;
`

function CommentCard(props){

    const [heartCount, setHeartCount] = useState(0);
    const [upCount, setUpCount] = useState(0);
    const [downCount, setDownCount] = useState(0);


        return(
            <Container>
                <InfoContainer>
                    <Title>{props.curr.title}</Title>
                    <Author>{props.curr.author}</Author>
                    <Reaction>
                        <span onClick={() => setHeartCount(heartCount + 1)}><FaHeart className="commentIcon"/>{heartCount}</span>
                        <span onClick={() => setUpCount(upCount + 1)}><FaRegThumbsUp className="commentIcon"/>{upCount}</span>
                        <span onClick={() => setDownCount(downCount + 1)}><FaRegThumbsDown className="commentIcon"/>{downCount}</span>
                    </Reaction><br />
                </InfoContainer>
                <Date>{props.curr.date}</Date>
                <Comment>{props.curr.comment}</Comment>
            </Container>

        )
}

export default CommentCard;