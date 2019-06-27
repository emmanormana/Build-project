import React from 'react';

const CheckInput = ({type, options, input, meta: {touched, error}}) => {
    return options.map((option, index)=> {
        return (
            <div key={index}>
                <label>
                    <input {...input} type={type} />
                    {option}
                </label>
                {touched && error && <span>{error}</span>}
            </div>
        )
    })
}

export default CheckInput;