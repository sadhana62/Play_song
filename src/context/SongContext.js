// src/context/SongContext.js
import React, { useState, createContext, useContext, useRef, useEffect } from 'react';

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    const handleSongEnd = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleSongEnd);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, []);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback error:", e));
      }
    }
  }, [currentSong, isPlaying]);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (currentSong) {
        setIsPlaying(!isPlaying);
    }
  };
  
  const seek = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    if (isFinite(audioRef.current.duration)) {
        audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  return (
    <SongContext.Provider value={{ currentSong, isPlaying, progress, playSong, togglePlayPause, seek }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSong = () => useContext(SongContext);