import React, {useState} from 'react';

export function useInputValueCustomHook(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChangeInput = (event) => {
        setValue(event.target.value);
    }
    return [value, onChangeInput];
}