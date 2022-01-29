import React from 'react';

const Button = ({value,style,onClick}) =>(
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Button;