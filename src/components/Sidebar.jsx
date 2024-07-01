import React, { useEffect, useState } from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { SlFire } from "react-icons/sl";
import { BsBagCheck } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineMovieCreation } from "react-icons/md";
import { HiMiniSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { MdSettingsInputAntenna } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setCategory } from '../redux/appSlice';

const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [active, setActive] = useState('')

    const navigation = [
        {
            id: 1,
            icon: <CiHome size={'1.5rem'} />,
            title: 'Home',
            path: '/',
            categories: 'All',
        },
        {
            id: 2,
            icon: <SiYoutubeshorts size={'1.5rem'} />,
            title: 'Shorts',
            categories: 'shorts'
            
        },
        {
            id: 3,
            icon: <MdSettingsInputAntenna size={'1.5rem'} />,
            title: 'Prodcast',
            categories: 'Prodcast'
        },

    ]
    const yourNavigation = [
        {
            id: 1,
            icon: <CiHome size={'1.5rem'} />,
            title: 'Your Channel'
        },
        {
            id: 2,
            icon: <RxCountdownTimer size={'1.5rem'} />,
            title: 'History'
        },
        {
            id: 3,
            icon: <CgPlayList size={'1.5rem'} />,
            title: 'Playlists'
        },
        {
            id: 4,
            icon: <RiVideoLine size={'1.5rem'} />,
            title: 'Yours Videos'
        },
        {
            id: 5,
            icon: <MdOutlineWatchLater size={'1.5rem'} />,
            title: 'Watch Later'
        },
        {
            id: 6,
            icon: <AiOutlineLike size={'1.5rem'} />,
            title: 'Liked Videos'
        },

    ]
    const Explore = [
        {
            id: 1,
            icon: <SlFire size={'1.5rem'} />,
            title: 'Trending',
            categories: 'Trending',
        },
        {
            id: 2,
            icon: <BsBagCheck size={'1.5rem'} />,
            title: 'Shopping',
            categories: 'Shopping',
        },
        {
            id: 3,
            icon: <IoMusicalNoteOutline size={'1.5rem'} />,
            title: 'Music',
            categories: 'Music',
        },
        {
            id: 4,
            icon: <MdOutlineMovieCreation size={'1.5rem'} />,
            title: 'Movies',
            categories: 'Movies',
        },
        {
            id: 5,
            icon: <HiMiniSignal size={'1.5rem'} />,
            title: 'Live',
            categories: 'Live',
        },
        {
            id: 6,
            icon: <SiYoutubegaming size={'1.5rem'} />,
            title: 'Gaming',
            categories: 'Gaming',
        },
        {
            id: 7,
            icon: <IoNewspaperOutline size={'1.5rem'} />,
            title: 'News',
            categories: 'News',
        },
        {
            id: 8,
            icon: <CiTrophy size={'1.5rem'} />,
            title: 'Sports',
            categories: 'Sports',
        },

    ]
    const toggleNav = useSelector((store) => store.app.open)
    const searchValue = useSelector((store) => store.app.category)
    // console.log(searchValue, '>???>>???');

    const search = (data) => {
        if (data != undefined ) {
            dispatch(setCategory(data))
            setActive(data)
            navigate('/')
        } else {
            dispatch(setCategory(''))
            
        }
    }
    

    return (
        <div className={`sidebar flex flex-col ${toggleNav ? 'lg:max-w-[250px] sm:w-[70px] open' : '  overflow-y-scroll'}  mt-14  scrollbar-hide  h-[calc(100vh-3.6rem)]  shadow-md fixed z-20 bg-white `}>
            <div className='border-b-2 py-2'>
                {navigation.map((data) => {
                    return <>
                        {/* <Link to={data.path && data.path}  > */}
                            <div className={`flex items-center px-5 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-3xl ${searchValue == data.categories && location.pathname == '/' ? 'bg-gray-200' : ''}`} key={data.id} onClick={() => search(data.categories)} >
                                {data.icon}
                                <span className={`px-4 ${toggleNav ? 'hidden' : ' lg:block'}`}>{data.title}</span>
                            </div >
                        {/* </Link> */}
                    </>
                })}
            </div>

            <div className='border-b-2 py-2'>
                <h2 className='px-5 '>You</h2>
                {yourNavigation.map((data) => {
                    return <>
                        <div className='flex items-center px-5 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-3xl' key={data.id}>
                            {data.icon}
                            <span className={`px-4 ${toggleNav ? 'hidden' : ' lg:block'}`}>{data.title}</span>
                        </div >
                    </>
                })}
            </div>
            <div className=' py-2'>
                <h2 className='px-5'>Explore</h2>
                {
                    Explore.map((data) => {
                        return <>
                            <div className={`flex items-center px-5 py-2 hover:bg-gray-200  hover:cursor-pointer rounded-3xl ${data.categories == active && searchValue == active ? 'bg-gray-200' : ''}`} key={data.id} onClick={() => search(data.categories)}>
                                {data.icon}
                                <span className={`px-4 ${toggleNav ? 'hidden' : ' lg:block'}`}>{data.title}</span>
                            </div >
                        </>
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;