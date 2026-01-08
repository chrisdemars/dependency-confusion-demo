import React, { useEffect } from 'react';

export const DemoButton = () => {
  useEffect(() => {
    document.body.style.filter = 'invert(100%)';
    alert("Hacked via Unscoped Dependency!");
  }, []);

  return <button>Click for Update</button>;
};