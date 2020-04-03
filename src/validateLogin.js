export default function validateLogin (values) {

    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 10) {
        errors.password = 'Password must be more than 10 characters';
    }

    return errors;
};

// email
    // the string to be more than 0 chars
    // need the string to be an email
// password
    // be more than 10 chars
    // the string to be more than 0 chars
