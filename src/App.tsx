import React, {useState} from 'react';
import Joke from './components/Joke';
import Button from './components/Button';

interface JokeResponse {
  value: string;
}

const App: React.FC<JokeResponse>= () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data: JokeResponse = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.log('Error fetching joke:', error);
    }
  };

  return (
    <div>
      <h1>Chuck Norris jokes</h1>
      <Joke joke={joke}/>
      <Button onClick={fetchJoke}/>
      
    </div>
  );
};

export default App;