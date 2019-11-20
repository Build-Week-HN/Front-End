import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

    
function NewsUpdates(props){

        return(
                <div>
                    {
                        props.hnData.map((curr, index) => {
                            if(index < 10) {
                                return (
                                    <div key={index}>
                                       <a href={curr.url}><span>{curr.title}</span></a>
                                       <span>Comments: {curr.comment_count}</span>
                                       {
                                           curr.comments.map((curr, index) => {
                                               if(index < 3) {
                                                   return (
                                                       <div key={index}>
                                                           <span>{curr.author}</span>
                                                           <p>{curr.text}</p>
                                                        </div>
                                                   )
                                               }
                                           })
                                       }
                                    </div>
                                )
                            }
                        })
                    }
                </div>
              
        )
}

export default NewsUpdates;