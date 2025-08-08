   import { useSong } from '../context/SongContext';
const BottomPlayer = ({ navigate }) => {
  
  const { currentSong, isPlaying, progress, togglePlayPause } = useSong();

  if (!currentSong) {
    return null;
  }

  return (
    <div style={styles.bottomPlayerContainer}>
        <div style={{...styles.bottomProgressBar, width: `${progress}%`}} />
        <div style={styles.bottomPlayer} onClick={() => navigate('Player')}>
            <img src={currentSong.artwork} style={styles.bottomArtwork} alt={currentSong.title} />
            <div style={styles.bottomSongInfo}>
                <p style={styles.bottomSongTitle}>{currentSong.title}</p>
                <p style={styles.bottomSongArtist}>{currentSong.artist}</p>
            </div>
            <button
                style={styles.controlButton}
                onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                }}
            >
                {isPlaying ? 
                    <svg fill="white" width="32" height="32" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg> :
                    <svg fill="white" width="32" height="32" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                }
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
export default BottomPlayer;