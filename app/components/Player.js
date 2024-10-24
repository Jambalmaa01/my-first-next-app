// app/components/Player.js
"use client"; // Add this line to mark the component as a Client Component

import React, { useCallback, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';

export default function Player(props) {
    const [videoEL, setVideoEL] = useState(null);

    const onVideo = useCallback((el) => {
        setVideoEL(el);
    }, []);

    useEffect(() => {
        if (videoEL == null) return;
        const player = videojs(videoEL, props);
        return () => {
            player.dispose();
        };
    }, [videoEL, props]);

    return (
        <div>
            <h1>Video Player</h1>
            <div data-vjs-player>
                <video height={500} ref={onVideo} className='video-js' playsInline />
            </div>
        </div>
    );
}
