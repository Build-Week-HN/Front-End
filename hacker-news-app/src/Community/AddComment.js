import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import { withFormik, Field, Form } from 'formik'; 

const Container = styled.div`
    width: 100%;
    padding: 10px 50px 25px;;
    margin: 0px auto;
    background-color: #5C94BD;
    display: flex;
    justify-content: space-evenly;
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
                            <Field type="date" />
                        </label>
                        <label> Title:
                            <Field type="text" />
                        </label>
                        <label> Author:
                            <Field type="text" />
                        </label> <br />
                        <label name="comment"> Comment:</label>
                            <textarea name="comment" rows="10" cols="30">Type your comment here</textarea>
                        <input type="submit" />
                    </Form>
                </CommentCard>
            </Container>
        )
}

export default AddComment;