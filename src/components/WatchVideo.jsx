import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API_KEY from '../constans/youtube';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/chatSlice';
import { toast } from 'react-toastify';
import { formatNumberOfViews } from '../utilits/commonfunctions/helperFunctions';

const WatchVideo = () => {
    // State For The Store Data Of The SingleVideo 
    const [singleVideoData, setSingleVideoData] = useState({})
    const [channelImg, setChannelImg] = useState()
    // TO Get The Id OF The Single Video That User Click From The Url
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v')

    // State For The Store The Value Of THe Input
    const [input, setInput] = useState('')

    // To Dispath The Chats(input value)
    const dispatch = useDispatch()


    //Api Call To Get All Data Of This Single Video
    const getSingleVIdeo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
            setSingleVideoData(res)
            // console.log(res?.data?.items[0]?.snippet?.channelId,'channel id');
        } catch (error) {
            toast('Sorry Server Problem Please Try Aagin Later', { theme: "colored", type: 'error', position: 'bottom-right' });
        }
    }
    // console.log(singleVideoData, 'dataofsinglrvideo');


    //Functoon For The Send Chat
    const sendChat = () => {
        dispatch(setMessage({
            name: 'UserName',
            message: input
        }))
        setInput('')
    };

    const getNameOfChannel = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${singleVideoData?.data?.items[0]?.snippet.channelId}&key=${API_KEY}`)
            setChannelImg(res.data.items[0].snippet.thumbnails.high.url);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (singleVideoData) {
            getNameOfChannel()
        }
        getSingleVIdeo()
        window.scrollTo({ top: 0, behavior: "auto" })
    }, [videoId,])

    return (
        <div className="flex flex-wrap lg:flex-nowrap  justify-center ">
            <div className='lg:w-[60%] w-[95%]'>
                <iframe
                    // width="100"
                    // height=""
                    src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className='w-[100%] rounded-3xl lg:h-[450px] md:h-[320px] h-[250px] '
                >
                </iframe>
                <h1 className='font-bold text-lg mt-2'>{singleVideoData.data?.items[0]?.snippet?.title}</h1>
                <div className="flex w-[100%] justify-between flex-wrap md:flex-nowrap">
                    <div className="flex lg:w-[45%] items-center flex-wrap md:flex-nowrap">
                        <div className='channel w-[60%] mt-2 flex flex-wrap md:flex-nowrap items-center md:w-[50%]'>
                            <img src={channelImg} alt={singleVideoData.data?.items[0]?.snippet?.channelTitle} className='w-[25%]  rounded-full' />
                            <p className='text-sm w-[80%] font-bold pl-2'>{singleVideoData.data?.items[0]?.snippet?.channelTitle}</p>
                        </div>
                        <div className='ml-4'>
                            <button className='px-4 py-1 rounded-3xl font-medium bg-gray-800 hover:bg-gray-700 text-white'>Subscribe</button>
                        </div>
                    </div>
                    <div className="flex lg:w-[45%] justify-between items-center flex-wrap md:flex-nowrap">
                        <div className='cursor-pointer'>
                            <span className='bg-gray-100 px-2 py-2 rounded-l-full  border-r-2 border-solid border-gray-500 hover:bg-gray-200 '><AiOutlineLike size={'24px'} className='inline' />{formatNumberOfViews(singleVideoData.data?.items[0]?.statistics?.likeCount)}</span>
                            <span className='bg-gray-100 px-2 py-2 pr-3 rounded-r-full hover:bg-gray-200' ><BiDislike className='inline' size={'24px'} /></span>
                        </div>
                        <div className='bg-gray-100 rounded-full px-2 py-2 cursor-pointer hover:bg-gray-200'><RiShareForwardLine className='inline mr-1' size={'24px'} /><span>Share</span></div>
                        <div className='bg-gray-100 rounded-full px-2 py-2 cursor-pointer hover:bg-gray-200'><LiaDownloadSolid className='inline mr-1' size={'24px'} /><span>Download</span></div>
                    </div>
                </div>
            </div>

            <div className="live-chat md:w-[70%] lg:w-[40%]  ml-2 mt-2 mx-auto ">
                <div className="w-[80%] border border-gray-300 rounded-lg h-fit p-3 m-auto">
                    <div className=" flex items-center justify-between">
                        <h1>Top Chat</h1>
                        <BsThreeDotsVertical />
                    </div>
                    <div className="overflow-y-auto h-[28rem] flex flex-col-reverse ">
                        <LiveChat />
                    </div>
                    <div className="flex items-center  p-1 border-t border-gray-200 ">
                        <div className="flex mt-3 mb-0">
                            <div className="mr-2">
                                <img alt={''} className='w-[100%] h-3 py-3 px-3 bg-black rounded-full  ' />
                            </div>
                            <div className='px-4'>
                                <input type="text" name="chat" placeholder='Chat......' className='border-b border-gray-300 outline-none w-[100%]' onChange={(e) => setInput(e.target.value)} value={input} />
                            </div>
                            <div className="send-btn ml-auto bg-gray-200 p-2 cursor-pointer rounded-full" onClick={sendChat}>
                                <LuSendHorizonal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchVideo;