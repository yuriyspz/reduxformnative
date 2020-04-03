import React from 'react';
import styled from 'styled-components/native'

const fieldComponent = ({input, label, type, meta: {touched, error, warning}}) => (
    <InputWrap>
        <Label>{label}</Label>
        <Input {...input} placeholder={label} type={type}/>
        {touched && ((error && <ErrorField>{error}</ErrorField>) || (warning &&
            <WarningField>{warning}</WarningField>))}
    </InputWrap>
);
const InputWrap = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;
const Label = styled.Text`
    font-size: 16px;
    color: #dedede;
    margin-bottom: 4px;
`;
const Input = styled.TextInput`
    width: 100%;
    height: 48px;
    color: black;
    font-size: 26px;
    padding-left: 12px;
    margin-top: 2px;
    border: 1px solid rgb(238, 238, 238);
`;
const ErrorField = styled.Text`
    color: red;
    font-size: 12px;
    text-align: left;
`;
const WarningField = styled(ErrorField)`
    color: orange;
`;
export default fieldComponent;
