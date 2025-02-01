```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [someOtherState, setSomeOtherState] = useState(false); //Added state

  useEffect(() => {
    console.log('Component rendered with count:', count);
  }, [count]); //Add count to the dependency array

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    setSomeOtherState(!someOtherState); //Change state to trigger useEffect again 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```