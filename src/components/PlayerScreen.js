   import { useSong } from '../context/SongContext';
const PlayerScreen = ({ navigate }) => {
  const { currentSong, isPlaying, progress, togglePlayPause, seek } = useSong();

  if (!currentSong) {
    return (
      <div style={styles.playerContainer}>
        <h2 style={styles.header}>No song selected</h2>
        <button style={styles.homeButton} onClick={() => navigate('Home')}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={styles.playerContainer}>
       <button style={styles.backButton} onClick={() => navigate('Home')}>
         <svg fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
       </button>
      <img src={currentSong.artwork} style={styles.playerArtwork} alt={currentSong.title} />
      <h2 style={styles.playerTitle}>{currentSong.title}</h2>
      <p style={styles.playerArtist}>{currentSong.artist}</p>
      <div style={styles.progressContainer} onClick={seek}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
      </div>
      <div style={styles.controls}>
        <button style={styles.controlButton}>
          <svg fill="white" width="48" height="48" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"></path></svg>
        </button>
        <button style={styles.controlButton} onClick={togglePlayPause}>
          {isPlaying ? 
            <svg fill="white" width="72" height="72" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg> : 
            <svg fill="white" width="72" height="72" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          }
        </button>
        <button style={styles.controlButton}>
          <svg fill="white" width="48" height="48" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
        </button>
      </div>
    </div>
  );
};
const styles = {
  appContainer: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#121212',
    color: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative'
  },
  container: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    paddingBottom: '80px', // Space for bottom player
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  songItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
  },
  artwork: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
  },
  songInfo: {
    marginLeft: '15px',
  },
  songTitle: {
    fontSize: '16px',
    margin: 0,
  },
  songArtist: {
    fontSize: '14px',
    color: '#b3b3b3',
    margin: 0,
  },
  playerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  playerArtwork: {
    width: 'clamp(250px, 80vw, 350px)',
    height: 'clamp(250px, 80vw, 350px)',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  playerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '30px',
    margin: '30px 0 5px 0',
  },
  playerArtist: {
    fontSize: '18px',
    color: '#b3b3b3',
    margin: 0,
  },
  progressContainer: {
    width: '80%',
    maxWidth: '400px',
    height: '5px',
    backgroundColor: '#404040',
    borderRadius: '5px',
    marginTop: '20px',
    cursor: 'pointer',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    transition: 'width 0.1s linear',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
    maxWidth: '300px',
    marginTop: '30px',
  },
  controlButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  homeButton: {
    padding: '10px 20px',
    backgroundColor: '#1DB954',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  bottomPlayerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70px',
    backgroundColor: '#181818',
  },
  bottomPlayer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    cursor: 'pointer',
  },
  bottomArtwork: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
  },
  bottomSongInfo: {
    flex: 1,
    marginLeft: '10px',
    overflow: 'hidden',
  },
  bottomSongTitle: {
    fontSize: '16px',
    whiteSpace: 'nowrap',
    margin: 0,
  },
  bottomSongArtist: {
    fontSize: '14px',
    color: '#b3b3b3',
    whiteSpace: 'nowrap',
    margin: 0,
  },
  bottomProgressBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '2px',
      backgroundColor: '#1DB954',
      transition: 'width 0.1s linear',
  }
};

// Add hover effect styles dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .songItem:hover { background-color: #282828; }
`;
document.head.appendChild(styleSheet);

export default PlayerScreen;
