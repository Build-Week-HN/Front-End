import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { gsap } from 'gsap';

    
function MyBookmarks(props){

    const [bookmarks, setBookmarks] = useState([])

    axios.get('https://bw-hackernews.herokuapp.com/bookmarks')
        .then(response => {
            setBookmarks(response)
            console.log(response)
        })
        .catch(error => {
            props.setError(error.message)
        })

        if(bookmarks.length === 0) {
            return(
                <div>
                    <p>You have no bookmarks</p>
                </div>
            )
        } else {
            return(
                    <div>
                        {
                            bookmarks.map((curr, index) => {
                                return (
                                    <div key={index}>
                                        <a href={curr.url}>{curr.title}</a>
                                        <p>{curr.author}</p>
                                        <p>{curr.comment_count}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                
            )
        }
}

export default MyBookmarks;