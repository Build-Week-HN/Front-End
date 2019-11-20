import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import CommentCard from './CommentCard';
import FilterForm from './Filter';
import AddCommentForm from './AddComment';

const Container = styled.div`
    width: 100%;
    margin: 10px 0px;
    position: relative;
    right: 8px;
`;

const SubHeading = styled.div`
    background-color: #1A3E59;
    margin: 0px auto;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
    color: white;
    text-decoration: none;
`;

const CommunityLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
`;


const CommentsContainer = styled.div`
    width: 100%;
`;

function CommunityPage(props){

    const [newComment, setNewComment] = useState({})
    const [serachResult, setSearchResult] = useState([])


        return(
            <Container>
                <SubHeading>
                    <CommunityLinks
                        to="/community/filter"
                        >Filter</CommunityLinks>
                    <CommunityLinks
                        to="/community/add-comment"
                        >Add Comment</CommunityLinks>
                </SubHeading>
                <Route  
                    path="/community/filter"
                    render={props => {
                        return (
                        <FilterForm 
                            {...props}
                            serachResult={serachResult}
                            setSearchResult={setSearchResult}/>)
                    }}/>
                <Route  
                    path="/community/add-comment"
                    render={props => {
                        return (
                        <AddCommentForm {...props}
                        newComment={newComment}
                        setNewComment={setNewComment}
                        />)
                    }}/>
                <CommentsContainer >
                {
                        props.comments.map((curr, index) => {
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
