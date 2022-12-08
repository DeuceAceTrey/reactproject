import logo from './logo.svg';
import './App.css';
import RankingList from './components/RankingList';
import { useState } from 'react';
import streamer_data from './data.json';

function App() {
  var [data, setData] = useState(streamer_data);

  setTimeout(() => {
    var increaseNum = parseInt(Math.random() * 1000) % data.length;
    setData(data.map((streamer, i) => {
      if (increaseNum == i)
        return {
          ...streamer,
          score: streamer.score + parseInt(Math.random() * 1000)
        }
      
      return streamer;
    }).sort((a, b) => b.score - a.score));
  }, 500);

  return (
    <div className="App">
      <RankingList streamer_list={data} />
    </div>
  );
}

export default App;
