import React from 'react';
import styled from 'styled-components';
import { withFormik, Field, Form, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';
import { FaCommentSlash } from 'react-icons/fa';

const Container = styled.div`
    width: 100%;
    padding: 20px 0px 25px;;
    margin: 0px auto;
    color: white;
    background-color: #5C94BD;
    
`;

function Filter(props){

    const handleChangeDate = (e) => {
        const search = e.target.value;
        const result = props.comments.filter(comment => {
            if(comment.date === e.target.value){
             return comment
            }
        });
        props.setComments(result)
        console.log(e.target.value)
    }

    const handleChangeAuthor = (e) => {
      const search = e.target.value.toLowerCase();
      const result = props.comments.filter(comment => {
          return comment.author.toLowerCase().includes(search)
      });
      props.setComments(result)
      console.log(e.target.value)
  }

      const handleChangeKeyword = (e) => {
        const search = e.target.value.toLowerCase();
        const result = props.comments.filter(comment => {
            return (
                comment.author.toLowerCase().includes(search) 
                || comment.comment.toLowerCase().includes(search) 
                || comment.title.toLowerCase().includes(search)
            )
        });
        props.setComments(result)
    }


        return(
            <Container>
            
                <label> Date Posted:
                    <input
                        type="date"
                        name="date"
                        onChange={handleChangeDate}/>
                </label>
                <label> Keyword:
                    <input
                        type="text"
                        name="keyword"
                        onChange={handleChangeKeyword}/>
                </label>
                <label> Author:
                    <input
                        type="text"
                        name="author"
                        onChange={handleChangeAuthor}/>
                </label>
              
            </Container>
        )
}

// const FilterForm = withFormik({
//     mapPropsToValues(){
//         return{
//             date: "",
//             keyword: "",
//             author: ""
//         };
//     },

//     validationSchea: Yup.object().shape({
//         date: Yup.date(),
//         keyword: Yup.string(),
//         author: Yup.string()
//     }),


// })(Filter)

export default Filter;