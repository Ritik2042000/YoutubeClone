import React from 'react';

const ChatMessage = ({data}) => {
    console.log(data,'inside chat mess');
    return (
        <div className='flex flex-wrap mt-2'>
            <div>
                <img alt={''} className='h-3 py-3 px-3 bg-black rounded-full' />
            </div>
            <div className='flex '>
                <h1 className='mx-2 font-bold text-sm'>{data.name}</h1>
                <p className='mx-2 text-sm text-gray-500 w-full'>{data.message}</p>
            </div>
        </div>
    );
};

export default ChatMessage;