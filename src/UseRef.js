import React, { useRef } from "react";

// it is used to access the DOM node or react elements and keeping mutuable variables
// it is created when component has been mounted
export const CustomTextInput = () => {
  const textInput = useRef();

  focusTextInput = () => textInput.current.focus();

  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
}

export const RenderCounter = () => {
  const counter = useRef(0);
  
  useEffect(() => {
    // Every time the component has been re-rendered, the counter is incremented
    counter.current = counter.current + 1;
  }); 
  
  return (
    <h1>{`The component has been re-rendered ${counter} times`}</h1>
  );
};