import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import CommentCard from './CommentCard';
import Filter from './Filter';
import AddCommentForm from './AddComment';

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0px auto;
`;

const SubHeading = styled.div`
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

    const [comments, setComments] = useState([{
        title:"Title Example",
        author:"Emma",
        date: Date(),
        comment: "This is another comment"
    }]);
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
                        comments={comments}/>)
                    }}/>
                <CommentsContainer >
                    {
                        comments.map((curr, index) => {
                            return (
                                <div key={index}>
                                <CommentCard 
                                    curr={curr}
                                    index={index}/>
                                </div>
                            )
                        })
                    }
                </CommentsContainer >
            </Container>
        )
}

export default CommunityPage;