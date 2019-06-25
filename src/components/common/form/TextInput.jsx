import React from 'react';
import {Label, Input, InputPair, ShortLabel, ShortInput} from "../../styles/signInFormStyle";
import { WarningRequired } from "../../styles/createAccountStyle";

export const TextInput = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div>
            <InputPair>
                <Label>{label}</Label>
                {touched && error && <WarningRequired>{error}</WarningRequired>}
                <Input {...input} placeholder={label} type={type} />
            </InputPair>
        </div>
    )
}


export const TextInput2 = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div>
            
            <InputPair>
                <ShortLabel>{label}</ShortLabel>
                {touched && error && <WarningRequired>{error}</WarningRequired>}
                <ShortInput {...input} placeholder={label} type={type} />
            </InputPair>
        </div>
    )
}

export default TextInput;