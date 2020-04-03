import React, {useState} from 'react';


const useForm = (submitCallback) => {

    const [values, setValues] = useState({email: '', password: ''});

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
        
    }

    const handleSubmit = event => {
        event.preventDefault(); // prevent browser default behaviour that refresh every time form submitted

        submitCallback();
    }

    return [
        values,
        handleChange,
        handleSubmit
    ];
    
}

export default useForm;