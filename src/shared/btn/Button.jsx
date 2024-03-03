import React from 'react';

const Button = ({children}) => {
    return (
        <button className='p-4 bg-primary-2 text-white rounded-lg font-medium'>
            {children}
        </button>
    );
};

export default Button;