import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Terms & Conditions</h3>
            <p>Go back to: <Link to='/register'>Resister</Link></p>
        </div>
    );
};

export default TermsAndConditions;