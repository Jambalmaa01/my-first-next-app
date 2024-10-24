"use client"; // Client Component гэж зааж өгнө

import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';

export default function PlayerCss() {
  const videoRef = useRef(null); // ref үүсгэх

  useEffect(() => {
    const player = videojs(videoRef.current, {
      techOrder: ['youtube'],
      sources: [
        {
          src: 'https://youtu.be/hR8_Ey7l3as?si=6z9IJCD42oYFdxwE',
          type: 'video/youtube',
        },
      ],
    });

    // Cleanup on unmount
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <>
      {/* <h1>Video Playeuuuuuuuuuuu</h1> */}
      <div data-vjs-player>
        <video
          ref={videoRef}
          className='video-js vjs-theme-city'
          playsInline
          controls
          preload='auto'
        />
      </div>
    </>
  );
}
