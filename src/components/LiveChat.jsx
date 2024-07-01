import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomMessage, generateRandomName } from '../utilits/helper';
import { setMessage } from '../redux/chatSlice';

const LiveChat = () => {
    const chats = useSelector((state) => state.chat.message);
    const dispatch = useDispatch()
    // console.log(chats, '<><><><><<<<<<>>>></></></></></>');
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(setMessage({
                name: generateRandomName(),
                message: generateRandomMessage(10),
            })
            )
        }, 1300)
        return (() => clearInterval(timer))
    }, [])

    return (
        <>
            <div className="px-4 py-1">
                <div>
                    {
                        chats.map((data, index) => {
                            return <ChatMessage key={index} data={data} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default LiveChat;