import React, { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch(url);
    const data = await res.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);
  
  return { data, loading };
}

export default () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (
    <div>
      <div>You clicked {count} times</div>
      <button onClick={() => setCount(count+1)}>Click Me</button>
      { loading ? <div>loading...</div> : <div>{data.name.first}</div> }
    </div>
  ); 
};
