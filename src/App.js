import './App.css';
import { useState } from 'react';
import Timeline from './components/timeline/Timeline';
import Container from './components/Container/Container';
import Year2000 from './components/timeline/Year2000/Year2000';

function App() {
  const [time, setTime] = useState(7)
  const handleClick = (e) => {
    let time = e.target.id.charAt(4)
    setTime(time);
  }
  
  
  return (
    <div className="App">
      <Timeline handleClick={handleClick} time={time}/>
   
    </div>
  );
}



export default App;
