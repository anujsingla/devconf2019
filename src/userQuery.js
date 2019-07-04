import React, { useState } from 'react';

export default function UserQuery() {
    const [userQuery, setUserQuery] = useState('');

    const updateuserQuery = (event) => {
        setUserQuery(event.target.value);
        console.log('Query', userQuery);
    }
    const searchQuery = () => {
        window.open(`https://google.com/search?q=${userQuery}`, '_blank');
    }
    return (
        <div className="form-inline m-b-20">
            <div className="form-group mx-sm-3 mb-2">
                <input className="form-control" value={userQuery} onChange={updateuserQuery} />
            </div>
            <button className="btn btn-primary mb-2" onClick={searchQuery}>Google Search</button>
        </div>
    );
}