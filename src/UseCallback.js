import React, {useState, useCallback, useMemo} from 'react';
import Button from './Button';
// example of useMemo, useCallback, memo
function factorial(x) {
    console.log('factorial');
    if(x === 0) {
       return 1;
    }
    return x * factorial(x-1);
 }

export function UseCallback() {
    const [count, setCount] = useState(0);
    const [fact, setfact] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c+1);
    }, []);

    const factNumber = useMemo(() => {
        const number = factorial(count);
        setfact(number);
    }, [count]);

    return (
        <div>
            <div>The number of count is {count}</div>
            <div>Factorial numberis {fact}</div>
            <Button callback={increment} text="Increment number" />
            <Button callback={factNumber} text="Factorial Number" />
        </div>
    )
}