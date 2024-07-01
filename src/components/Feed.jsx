import React, { useEffect } from 'react';
import Categories from './Categories';
import VideoContent from './VideoContent';


const Feed = () => {
    return (
        <div className='flex flex-col '>
            <Categories />
            <VideoContent />
        </div>
    );
};

export default Feed;