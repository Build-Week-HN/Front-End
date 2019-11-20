import React from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

    
function CommunityUpdate(props){

        return(
                <div>
                    {
                        props.comments.map((curr, index) => {
                            if(index < 5) {
                                return (
                                    <div key={index}>
                                        <span>{curr.author}</span>
                                        <span>{curr.date}</span>
                                        <p>{curr.comment}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
  
        )
}

export default CommunityUpdate;