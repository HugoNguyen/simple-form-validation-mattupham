import React from 'react';
import useForm from './useForm';

const Form = () => {

    const [
        values,
        handleChange,
        handleSubmit
    ] = useForm(submit);   

    // const function vs function
    // const function may cause problem => temporal dead zone
    // const function must be declare before used
    // function maybe suitable in this situation
    // const submit = () => {
    //     console.log('sumbit succesfully');
    // }

    function submit() {
        console.log('submit succesfully');
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

// create custom React Hook

// handle errors
// show errors if there are errors

export default Form;