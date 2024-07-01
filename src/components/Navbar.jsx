import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setCategory, toggleSidebar } from '../redux/appSlice';
import API_KEY, { SEARCH_SUGGESTION_API } from '../constans/youtube';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [input, setInput] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()

    const toggleNavbar = () => {
        dispatch(toggleSidebar());
    };

    const getSearchValue = (e) => {
        setInput(e.target.value)
    };

    // console.log(input, 'input');
    const searchVideo = (e) => {
        if (input !== '' && input !== undefined) {
            if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
                dispatch(setCategory(input));
                setInput('')
            }
            if (location.pathname !== '/') {
                navigate('/')
                setInput('')
            }
        }
    }

    const goHomePage = () => {
        if (location.pathname !== '/') {
            navigate('/')
        }
        dispatch(setCategory('All'));
    }

    // const showSuggestion = async () => {
    //     try {
    //         const res = await axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`)
    //         console.log(res);

    //     } catch (error) {
    //         toast(error.message);
    //     }
    // }

    // useEffect(() => {
    //     showSuggestion()
    // }, [input])
    return (
        <div className='container flex items-center justify-between px-5 py-3 fixed bg-white z-20'>
            <div className="logo sm:w-[33%] flex items-center">
                <div className="hambugar cursor-pointer">
                    <RxHamburgerMenu onClick={toggleNavbar} />
                </div>
                <div className="logo mx-3 cursor-pointer" onClick={goHomePage}>
                    <img src={Logo} alt="logoimg" className='w-32 ' />
                </div>
            </div>
            <div className="search md:w-[33%] flex justify-center sm:w-[70%] ">

                <div className="input w-[70%]">
                    <input type='text' placeholder='Search' className='w-full rounded-l-full bg-gray-40 border px-3 py-1 outline-none' value={input} onChange={(e) => getSearchValue(e)} onKeyDown={searchVideo} />
                </div>
                <button className='w-10 bg-slate-100 rounded-r-full  text-center pl-2' onClick={searchVideo} type='submit'>
                    <IoSearch className='' />
                </button>

            </div>
            <div className="side-icons w-[33%] flex items-cente justify-end max-sm:hidden">
                <div className='px-2'>
                    <BiVideoPlus size={'2rem'} />
                </div>
                <div className='px-2'>
                    <IoIosNotificationsOutline size={'2rem'} />
                </div>
                <div className='px-2'>
                    <div className='rounded-full bg-black w-3 h-4 p-4'></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;