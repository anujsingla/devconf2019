import React, {useState, useEffect} from 'react';

export function UseEffectHook() {
    const [name, setName] = useState('anuj');

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    useEffect(() => {
        document.title = name;
    }, [name])

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">First name</span>
            </div>
            <input type="text" value={name} onChange={onChangeName} />
       </div>
    )
}