import React from 'react';

export default (props) => (
    <a href={props.href} className='ButtonLink'>
        {props.label}
    </a>
);