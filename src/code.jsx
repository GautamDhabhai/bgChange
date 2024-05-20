import React, { useState } from 'react';

function Container() {
  const [isDark, setMode] = useState(false);

  const toggleMode = () => {
    setMode(prevIsDark => {
      const newIsDark = !prevIsDark;
      document.body.style.backgroundColor = newIsDark ? 'grey' : 'aliceblue';
      return newIsDark;
    });
  };

  return (
    
      <button
        onClick={toggleMode}
        style={{
          backgroundColor: isDark ? 'aliceblue' : 'grey',
          color: isDark ? 'grey' : 'aliceblue',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          transition: 'all 0.5s'
        }}
      >
        Click Me!
      </button>
  );
}

export default Container;
