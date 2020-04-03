import React, {useState} from 'react';


const useForm = (submitCallback, validateCallback) => {

    const [values, setValues] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({email: '', password: ''});
    // new state for errors
    // function that validate these errors
    // pass these errors back to form



    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
        
    }

    const handleSubmit = event => {
        event.preventDefault(); // prevent browser default behaviour that refresh every time form submitted

        // handle errors
        setErrors(validateCallback(values));

        submitCallback();
    }

    return [
        values,
        handleChange,
        handleSubmit,
        errors
    ];
    
}

export default useForm;