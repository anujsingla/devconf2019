import React from 'react';
export default React.memo(function Button({callback, text}) {
    console.log('Button Component render');
    return (
        <button onClick={callback}>{text}</button>
    );
})