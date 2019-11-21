import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import CommentCard from './CommentCard';
import FilterForm from './Filter';
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

const CommunityLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
`;

const CommentsContainer = styled.div`
`;

function CommunityPage(props){

    const [comments, setComments] = useState([{
        title:"Title Example",
        author:"Emma",
        date: "19/11/2019",
        comment: "This is another comment"
    }]);
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
                        className="communityLinks">Add Comment</CommunityLinks>
                </SubHeading>
                <Route  
                    path="/community/filter"
                    render={props => {
                        return (
                        <FilterForm 
                            {...props}
                            comments={comments}
                            setComments={setComments}
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
