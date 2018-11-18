import React, { useState, useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);

  useEffect(async () => {
    const res = await fetch('https://api.randomuser.me/');
    const data = await res.json();
    const [item] = data.results;
    setPerson(item);
  }, []);

  return (
    <div>
      <div>You clicked {count} times</div>
      <button onClick={() => setCount(count+1)}>Click Me</button>
      { person && <div>{person.name.first}</div> }
    </div>
  ); 
};
