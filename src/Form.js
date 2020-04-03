import React, { useState } from 'react';

const Form = () => {

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

        submit();
    }

    const submit = () => {
        console.log('sumbit succesfully');
    }

    return (
        <div>
            <form noValidate onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <div>
                        <input 
                            type='email'
                            name='email'
                            placeholder='input email here'
                            value={values.email}
                            onChange={handleChange} 
                        />
                        {/* error message here */}
                    </div>
                </div>
                
                <div>
                    <label>Password</label>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='input password here'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {/* error message here */}
                    </div>
                </div>
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

// form
// label / input for email
// label / input for password
// signup button

// handle changes
// handle submit

// handle errors
// show errors if there are errors

export default Form;