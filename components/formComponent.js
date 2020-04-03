import React from 'react';
import {Field, reduxForm} from 'redux-form';
import fieldComponent from "./fieldComponent";
import styled from 'styled-components/native'
import {connect} from "react-redux";
import {createBook} from "../actions";
import validate from "./validate";

const AddBook = (props) => {
    const {handleSubmit, pristine, submitting, reset} = props;
    const submit = (values) => {
        props.onAddBook(values);
        reset();
    };

    return (

        <FormWrapper>
            <FormHeading>Form to submit</FormHeading>
            <Form>
                <Field
                    name='title'
                    type='text'
                    component={fieldComponent}
                    label='Book Title'
                />
                <Field
                    name='author'
                    type='text'
                    component={fieldComponent}
                    label='Book Author'
                />
                <Field
                    name='description'
                    type='text'
                    component={fieldComponent}
                    label='Book Description'
                />
                <Field
                    name='published'
                    type='number'
                    component={fieldComponent}
                    label='Book Published Year'
                />
                <Button onPress={handleSubmit(submit)}>
                    <ButtonText>Submit Form</ButtonText>
                </Button>
            </Form>
        </FormWrapper>

    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (book) => {
            console.log(book);
            dispatch(createBook(book));
        }
    }
};

export default reduxForm({
    form: "addBookForm",
    validate
})(
    connect(
        null,
        mapDispatchToProps
    )(AddBook)
);



const FormWrapper = styled.View`
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    width: 100%;
`;
const FormHeading = styled.Text`
    font-size: 30px;
    text-align: center;
    margin-bottom: 25px;
`;

const Form = styled.View`
    width: 100%;
    box-shadow: 0 0 10px #000;
    shadow-opacity: 0.08;
    background: transparent;
    padding: 25px;
`;

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 36px;
    border: none;
    background: green;
`;

const ButtonText = styled.Text`
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-size: 18px;
`;
