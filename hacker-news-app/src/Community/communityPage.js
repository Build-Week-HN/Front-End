import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import CommentTemplate from './CommentTemplate';
import Filter from './Filter';
import AddCommentForm from './AddComment';

const Container = styled.div`
    width: 100%;
`;

const SubHeading = styled.div`
    width: 100%;
    background-color: #1A3E59;
    margin: 0px auto;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
`;

const CommentsContainer = styled.div`
`;

function CommunityPage(props){

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({})

        return(
            <Container>
                <SubHeading>
                    <NavLink 
                        to="/community/filter"
                        className="communityLinks">Filter</NavLink>
                    <NavLink 
                        to="/community/add-comment"
                        className="communityLinks">Add Comment</NavLink>
                </SubHeading>
                <Route  
                    path="/community/filter"
                    render={props => {
                        return (
                        <Filter {...props}/>)
                    }}/>
                <Route  
                    path="/community/add-comment"
                    render={props => {
                        return (
                        <AddCommentForm {...props}
                        newComment={newComment}
                        setNewComment={setNewComment}
                        setComments={setComments}
                        comment={comments}/>)
                    }}/>
                <CommentsContainer >
                    <p>discussion board entries</p>
                </CommentsContainer >
            </Container>
        )
}

export default CommunityPage;