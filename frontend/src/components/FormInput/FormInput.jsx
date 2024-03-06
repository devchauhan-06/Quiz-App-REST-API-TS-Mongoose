import React from 'react';

const FormInput = ({ type, name, id, placeholder, value, onChange, onBlur, error, touched }) => (
    <div className={`input-block ${error && touched ? 'error' : ''}`}>
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        {error && touched && (
            <p className="form-error">{error}</p>
        )}
    </div>
);

export default FormInput;
