import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    const [color, setColor] = useState('');
    const [textColor, setTextColor] = useState('');

    const buttonStyles = {
        backgroundColor: color,
        color: textColor,
        padding: '8px 16px'
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const onButtonClick = () => {
        setColor(getRandomColor());
        setTextColor(getRandomColor());
    };

    return (
        <button type="button" class="btn btn-primary" onClick={onButtonClick} style={buttonStyles}>Click Here</button>
    );
}

export default Button;

if (document.getElementById('primary-button')) {
    ReactDOM.render(<Button />, document.getElementById('primary-button'));
}
