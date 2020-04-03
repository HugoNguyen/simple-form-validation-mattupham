import React, {useState, useEffect} from 'react';


const useForm = (submitCallback, validateCallback) => {

    const [values, setValues] = useState({email: '', password: ''});
    
    // new state for errors
    // function that validate these errors
    // pass these errors back to form
    const [errors, setErrors] = useState({});
    
    const [isSubmitting, setIsSubmitting] = useState(false);


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

        setIsSubmitting(true);
    }

    useEffect(() => {
        // check to see if there are errors
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitCallback();
        }

        // call our callback

    }, [errors]);

    return [
        values,
        handleChange,
        handleSubmit,
        errors
    ];
    
}

export default useForm;