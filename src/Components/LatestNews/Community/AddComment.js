import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import { withFormik, Field, Form, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';

const Container = styled.div`
    padding: 10px 10px 5px;;
    margin: 0px auto;
    color: white;
    background-color: #5C94BD;
    display: flex;
    justify-content: space-evenly;
    line-height: 3;
`;

const CommentCard = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 10px auto;
`;

function AddComment(props){

        return(
            <Container>
                <CommentCard>
                    <Form>
                        <label> Date:
                            <Field 
                                type="date"
                                name="date"/>
                        </label>

                        <label> Title:
                            <Field 
                                type="text"
                                name="title"/>
                        </label>
                        <ErrorMessage 
                            name="title" 
                            render={err => <div className="errorMessageComment">{err}</div>}/>
                        <label> Author:
                            <Field 
                                type="text"
                                name="author"/>
                        </label> 
                        <ErrorMessage 
                            name="author" 
                            render={err => <div className="errorMessageComment">{err}</div>}/>
                <br />
                        <Field as="textarea" name="comment" rows="5" cols="90" placeholder="Type your comment here..."/>
                        <ErrorMessage 
                            name="comment" 
                            render={err => <div className="errorMessageComment">{err}</div>}/>
                        <br /><input type="submit" />
                    </Form>
                </CommentCard>
            </Container>
        )
}

const AddCommentForm = withFormik({
    mapPropsToValues() {
        return{
            date: "",
            title: "",
            author: "",
            comment: ""
        };
    },

    validationSchema: Yup.object().shape({
        date: Yup.date(),
        title: Yup.string().required("Please give your comment a title."),
        author: Yup.string(),
        comment: Yup.string().min(20, "Your comment must be at least 20 characters")
    }),

    handleSubmit(commentData, formikbag){
        console.log(commentData);
        console.log(formikbag);
        formikbag.resetForm();
        formikbag.props.setComments([...formikbag.props.comments, commentData]);
    }


})(AddComment)

export default AddCommentForm;