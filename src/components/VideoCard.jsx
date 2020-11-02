import React from 'react';
import './VideoCard.css';
import icm from '../assets/ic-mobile.jpg';
import icd from '../assets/ic-desktop.png';

function VideoCard({ video }) {

  const videoCard = {
    minWidth: video.view === 'mobile'? '260px': '300px',
    width: video.view === 'mobile'? '260px': '300px',
    height: video.view === 'mobile'? '350px': '250px',
    marginRight: '30px',
    boxShadow: "0 0.5em 1em -0.125em rgba(10,10,10,.30), 0 0 0 1px rgba(10,10,10,.02)",
  };

  return (
    <div className="videoCard" style={videoCard}>
      <video width="100%" height="100%" poster={ video.view === 'mobile'? icm: icd} controls>
        <source src={video.src} type={`video/mp4` || `video/mov`} />
      </video>
    </div>
  )
}

export default VideoCard
