import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import CommunityUpdates from './CommunityUpdates';
import NewsUpdates from './NewsUpdates';
import MyBookmarks from './MyBookmarks';


    const Container = styled.div`
        height: calc(100vh - 70px);
        position: relative;
        right: 8px;
        width: 100vw;
        display: flex;
        margin-top: 12px;
    `;

    const SideBar = styled.div`
        background-color: #F2D6EB;
        height: 100%;
        width: 40%;
        max-width: 400px;
        color: #1A3E59;
    `;

    const H1 = styled.h1`
        color: #1A3E59;
        padding: 80px 20px;
        font-size: 3rem;
    `;

    const BookmarkContainer = styled.div`
        width: 100%;
        text-align: center;
    `;

    const Activities = styled.div`
        display: flex;
        flex-direction: column;
        width: 58%;
        height: 100%;
    `;

    const NewsContainer = styled.div`
        border: 1px solid black;
        height: calc(50% - 20px);
        margin: 10px 0px;
        overflow: scroll;
    `;

    const CommunityContainer = styled.div`
         border: 1px solid black;
         height: calc(50% - 10px);
         overflow: scroll;
    `;
    
function Dashboard(props){

        return(
         <Container>
            <SideBar>
                <div>
                    <H1>Welcome Back, {props.user}!</H1>
                </div>
                <BookmarkContainer>
                    <h3>My Bookmarks</h3>
                    <MyBookmarks {...props}/>
                </BookmarkContainer>
            </SideBar>
            <Activities>
                <NewsContainer>
                    <h3>Latest News Updates</h3> <Link to="/">More</Link>
                   <NewsUpdates {...props}/>
                </NewsContainer>
                <CommunityContainer>
                    <h3>What's happening in our community?</h3><Link to="/community">More</Link>
                    <CommunityUpdates {...props}/>
                </CommunityContainer>
            </Activities>
         </Container>
        )
}

export default Dashboard;
