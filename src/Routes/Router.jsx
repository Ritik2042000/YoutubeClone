import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoAuthLayout from './NoAuthLayout';
import Feed from '../components/Feed';
import WatchVideo from '../components/WatchVideo';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NoAuthLayout/>}>
                    <Route path='/' element={<Feed/>} />
                    <Route path='/watchvideo' element={<WatchVideo/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default Router;