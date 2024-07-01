import React from 'react';
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoAuthLayout = () => {
    const toggleNav = useSelector((store) => store.app.open)
    return (
        <>
            <div >
                <Navbar />
                <div className="flex w-full flex-row">
                    <div className="w-[17%] ">
                        <Sidebar />
                    </div>
                    <div className={`mainContent w-[100%] pt-9  mt-9 mx- h-[90vh] overflow-y-scroll z-0 fixed  ${toggleNav ? 'pl-[90px]' : 'lg:pl-[210px] md:pl-[90px] sm:pl-[90px] '}`}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoAuthLayout;
