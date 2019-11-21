import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import styled from "styled-components";
import { gsap } from "gsap";

function MyBookmarks(props) {
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("/bookmarks")
      .then(response => {
        setBookmarks(response.data);
      })
      .catch(error => {
        debugger;
        props.setError(error.message);
      });
  }, []);

  if (!bookmarks || bookmarks.length === 0) {
    return <div>You have no bookmarks</div>;
  }

  return (
    bookmarks && (
      <div>
        {bookmarks.map((curr, index) => {
          return (
            <div key={index}>
              <a href={curr.url}>{curr.title}</a>
              <p>{curr.author}</p>
              <p>{curr.comment_count}</p>
            </div>
          );
        })}
      </div>
    )
  );

  // if(bookmarks.length === 0) {
  //     return(
  //         <div>
  //             <p>You have no bookmarks</p>
  //         </div>
  //     )
  // } else {
  //     return(
  //             <div>
  //
  //                     bookmarks.map((curr, index) => {
  //                         return (
  //                             <div key={index}>
  //                                 <a href={curr.url}>{curr.title}</a>
  //                                 <p>{curr.author}</p>
  //                                 <p>{curr.comment_count}</p>
  //                             </div>
  //                         )
  //                     })
  //                 }
  //             </div>

  //     )
  // }
}

export default MyBookmarks;
