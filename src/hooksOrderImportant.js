import React, { useState } from 'react';

let firstRender = true;

export default function HooksOrderImportant() {
    let initName;
    if (firstRender) {
        // compile time error because it breaks hooks rule and we can 
        // use hook in the condition or loop
        [initName] = useState("Rudi");
        firstRender = false;
    }
    const [firstName, setFirstName] = useState(initName);
    const [lastName, setLastName] = useState("Yardley");
  
    return (
      <div>
          <span>{`${firstName} ${lastName}`}</span>
          <button onClick={() => setFirstName("Fred")}>Fred</button>
          <button onClick={() => setLastName("Fred")}>Fred</button>
      </div>
    );
}
// complie error - React Hook "useState" is called conditionally. React Hooks must be called in the
// exact same order in every component render  react-hooks/rules-of-hooks