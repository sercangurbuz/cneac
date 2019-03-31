import React from 'react';
import "./index.scss";

const Button = ({ children, size, inverse, hiddenMd, ...rest }) => {

    return <span className={`rounded-button ${size || ''} ${inverse ? "inverse" : ""} 
    ${hiddenMd ? "hidden" : ""}`} {...rest}>
        {children}
    </span>
}


export default Button;