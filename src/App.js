import React, { useState } from 'react';
 import HomeScreen from './components/HomeScreen';
 import PlayerScreen from './components/PlayerScreen';
import BottomPlayer from './components/BottomPlayer';
import { SongProvider } from './context/SongContext';
import './index.css'; // Import the styles

function App() {
 const [screen, setScreen] = useState('Home');
  const navigate = (targetScreen) => setScreen(targetScreen);

  return (
   <SongProvider>
      <div className="appContainer">
        {screen === 'Home' && <HomeScreen navigate={navigate} />}
        {screen === 'Player' && <PlayerScreen navigate={navigate} />}
        <BottomPlayer navigate={navigate} />
      </div>
    </SongProvider>
  );
}

export default App;
