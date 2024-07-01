import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="youtube-card-loader ">
            <div className="thumbnail-yt"></div>
            <div className="content">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </div>
    );
};

export default Loader;