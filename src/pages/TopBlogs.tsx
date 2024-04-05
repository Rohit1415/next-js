"use client";

import React, { useEffect } from "react";
import style from "../style/topBlog.module.scss";
import { getTopBlog } from "@/store/topBlog/api";
import { TopBlog } from "@/store/topBlog/api/interface";
import Loader from "@/component/Loader";
import { useAppDispatch, useAppSelector } from "@/store";

const TopBlogs = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.topBlog);

  useEffect(() => {
    const getTopBlogs = async () => {
      await dispatch(getTopBlog());
    };
    getTopBlogs();
  }, [dispatch]);

  return (
    <div className={style.topBlog_wrapper}>
      <div className={style.topBlog}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.map((item: TopBlog) => (
              <div className={style.content} key={item.id}>
                <span>
                  {" "}
                  {item.id} {"."}{" "}
                </span>
                <p> {item.title} </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TopBlogs;
