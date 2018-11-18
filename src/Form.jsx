import React, { useState } from 'react';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value),
  }
}

export default () => {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
    <div>
      <input {...email} />
      <input {...password} type="password" />
    </div>
    
  ); 
};
