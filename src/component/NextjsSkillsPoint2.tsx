'use client';

import React, { useState, useMemo } from 'react';
import style from '../style/nextjs_skills.module.scss';
import Loader from './Loader';
import { useAppDispatch, useAppSelector } from '@/store';
import { getImg } from '@/store/img/api';

const NextjsSkillsPoint2 = () => {
    const dispatch = useAppDispatch();
    const { data, isLoading } = useAppSelector((state) => state.img);

    const [img, setImg] = useState('/static/dummy.jpg');

    useMemo(() => {
        if(data){
            setImg(data);
        }
    }, [data]);

    const getNewImage = async () => {
        await dispatch(getImg());
    };

    return (
        <div className={style.img_wrapper}>
            <button onClick={getNewImage}>Change Image</button>
            {
                isLoading ? <Loader /> : <img loading='lazy' src={img} alt="test_img" className={style.image} />
            }
        </div>
    );
};

export default NextjsSkillsPoint2;
