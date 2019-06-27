import React from 'react';
import {Label, Input, InputPair, ShortLabel, ShortInput, LargeInput} from "../../styles/signInFormStyle";
import { WarningRequired, LabelPair } from "../../styles/createAccountStyle";

export const TextInput = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div>
            <InputPair>
                <LabelPair>
                    <Label>{label}</Label>
                    {touched && error && <WarningRequired>{error}</WarningRequired>}
                </LabelPair>
                <Input {...input} placeholder={label} type={type} />
            </InputPair>
        </div>
    )
}


export const TextInput2 = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div>
            
            <InputPair>
                <LabelPair>
                    <ShortLabel>{label}</ShortLabel>
                    {touched && error && <WarningRequired>{error}</WarningRequired>}
                </LabelPair>
                <ShortInput {...input} placeholder={label} type={type} />
            </InputPair>
        </div>
    )
}

export const TextInput3 = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div>
            
            <InputPair>
                <LabelPair>
                    <Label>{label}</Label>
                    {touched && error && <WarningRequired>{error}</WarningRequired>}
                </LabelPair>
                <LargeInput {...input} placeholder={label} type={type} />
            </InputPair>
        </div>
    )
}

export default TextInput;