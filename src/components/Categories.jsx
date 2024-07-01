import React, { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/appSlice';

const Categories = () => {

    const dispatch = useDispatch()
    const buttonsOfCategories = [
        {
            id: 1,
            title: 'All'
        },
        {
            id: 2,
            title: 'Gaming'
        },
        {
            id: 3,
            title: 'Music'
        },
        {
            id: 4,
            title: 'Live'
        },
        {
            id: 5,
            title: 'Mixes'
        },
        {
            id: 6,
            title: 'BGMI'
        },
        {
            id: 7,
            title: 'Javascript'
        },
        {
            id: 9,
            title: 'Data Structures'
        },
        {
            id: 10,
            title: 'T-Series'
        },
        {
            id: 11,
            title: 'Mobiles'
        },
        {
            id: 12,
            title: 'NextJS'
        },
        {
            id: 13,
            title: 'HTML'
        },
        {
            id: 14,
            title: 'Comady'
        },
        {
            id: 15,
            title: 'Bootstrap'
        },
        {
            id: 16,
            title: 'Node'
        },
        {
            id: 17,
            title: 'Technology'
        },
        {
            id: 18,
            title: 'Cricket'
        },
        {
            id: 19,
            title: 'Programming'
        },

    ]

    const intiallbtnactive = useSelector((store) => store.app.category)
    // State For Active The Button ON Their Categories
    const [btnactive, setBtnActive] = useState(intiallbtnactive);

    // Function For The Active The Button
    const selectCategories = (name) => {
        if (btnactive !== name) {
            dispatch(setCategory(name))
            setBtnActive(name)
        }
        // console.log(name);
    }
    useEffect(()=>{
            dispatch(setCategory(btnactive))
    },[])
    return (
        <div className='w-[100%] overflow-x-scroll flex scrollbar-hide my-2 '>
            {
                buttonsOfCategories.map((data) => {
                    return <div className='' key={data.id}>
                        <buttons className={`${btnactive == data.title && intiallbtnactive == data.title ? 'bg-slate-900 text-white' : 'bg-gray-200 hover:bg-gray-300'} px-3  py-1 cursor-pointer rounded-xl mx-2 text-sm  inline-block w-max `} onClick={() => selectCategories(data.title)}>
                            {data.title}
                        </buttons>
                    </div>
                })
            }
        </div>
    );
};

export default Categories;