
export default function Contact(props) {
    console.log('Contact component');
    return (
        <div>
            <h2>Please Contact me </h2>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

import PropTypes from 'prop-types';
Contact.propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string
}
