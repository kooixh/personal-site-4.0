import React from 'react';

export function Emoji(props) {
    return (
        <span className="emoji" role="img" aria-label={props.label ? props.label : ''}>
            {props.symbol}
        </span>
    );
}

export default Emoji;
