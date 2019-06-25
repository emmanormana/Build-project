import React from 'react';
import {Label, Input, InputPair} from "../../styles/signInFormStyle";

const TextInput = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div>
            <Label>{label}</Label>
            <InputPair>
                <Input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </InputPair>
        </div>
    )
}

export default TextInput;