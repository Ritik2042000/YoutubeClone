import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import API_KEY from '../constans/youtube';
import { useNavigate } from 'react-router-dom';
import { formatNumberOfViews, timeSince } from '../utilits/commonfunctions/helperFunctions';

const VideoCard = ({ data }) => {

    //State For The 
    const [channelImg, setChannelImg] = useState([]);
    //Api Call For To GEt TheChannel Name
    const getNameOfChannel = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${API_KEY}`)
            setChannelImg(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getNameOfChannel()
    }, [])
    return (
        <>
            <div className='flex flex-col w-[100%] cursor-pointer'>
                <div className="thubnail ">
                    <img src={data?.snippet?.thumbnails?.medium?.url} alt="" className='w-[100%] rounded-xl hover:rounded-none' />
                </div>
                <div>
                    <div className='flex '>
                        <div className='channel max-w-[10%] mt-2 '>
                            <img src={channelImg} alt={data?.snippet?.channelTitle} className='w-[100%]  rounded-full' />
                        </div>
                        <div className="info-video flex flex-col ml-3">
                            <h1 className='font-bold' title={data?.snippet?.title}>{data?.snippet?.title.slice(0,80)}</h1>
                            <p className='text-sm text-gray-500'>{data?.snippet?.channelTitle}</p>
                            <div >
                                <span className='text-sm text-gray-500'>{formatNumberOfViews(data?.statistics?.viewCount)} views</span>
                                <span className='text-sm text-gray-500 p-2'>{timeSince(data?.snippet?.publishedAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoCard;