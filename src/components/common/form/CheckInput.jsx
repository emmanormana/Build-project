import React from 'react';

const CheckInput = ({type, label, input, meta: {touched, error}}) => {
    return (
        <div>
            <input {...input} type={type}/>
            <label>{label}</label>
            {touched && error && <span>{error}</span>}
        </div>
    )
};

export default CheckInput;