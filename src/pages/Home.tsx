import React from 'react';
import style from '../style/home.module.scss';
import { BlogPost, homeBlogData } from '@/data/homePage';

const Home = () => {
  return (
   <React.Fragment>
        <div className={style.home_wrapper}>
            <div className={style.home_overlay}></div>
            <div className={style.home_bg_content}>
                <h1>
                    Welcome to Blogify
                </h1>
                <h2>
                    Discover Stories That Matter
                </h2>
            </div>
        </div>
        <div className={style.home_content_warapper} >
            {
                homeBlogData.map((item:BlogPost) => {
                    return(
                        <div className={style.home_content} key={item.id}>
                            <p className={style.home_blog_heading}>
                                {item.title}
                            </p>
                            <p className={style.home_blog_sub_heading}>
                            {item.subtitle}
                            </p>
                            <p className={style.home_blog_author}>
                                {item.author} {"•"}
                                <span>
                                    &nbsp;{item.date_time}
                                </span>
                            </p>
                        </div>
                    );
                })
            }
            
        </div>
        <div className={style.read_more}>
            <div>
                <button>Read more..</button>
            </div>
        </div>
   </React.Fragment>
  );
};

export default Home;