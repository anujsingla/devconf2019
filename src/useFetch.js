import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    const fetchData = (url) => {
        loadData(url)
        .then((json) => {
            console.log(json);
            setResult(json);
        });
    }
    const loadData = (url) => {
        return fetch(url).then(response => response.json());
    }
    useEffect(() => {
        loadData(url)
        .then((json) => {
            console.log(json);
            setResult(json);
        });
    }, []);
    return [result, fetchData];
}