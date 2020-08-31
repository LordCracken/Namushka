import React, { useState, useEffect } from 'react';
import { FeedCard } from './Components/FeedCard';

const App = () => {

const [data, setData] = useState([]);

useEffect(() => {
  fetch('./dbFeed.json')
    .then(response => response.json())
    .then((data => setData(data)),
    error => console.error(error));

  }, []);
  
  return (
    <>
      <h1 className="title app__title">Ты сегодня покормил кота?</h1>
      <div className="feed-block">
        {data.map(item => <FeedCard data={item} key={item.key} />)}
      </div>
    </>
  );
}

export default App;
