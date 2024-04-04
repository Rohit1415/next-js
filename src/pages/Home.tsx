import style from '../style/home.module.scss';

const Home = () => {
  return (
    <div className={style.home_wrapper}>
        <div className={style.home_overlay}></div>
        <div className={style.home_content}>
            <h1>
                Welcome to Blogify
            </h1>
            <h2>
                Discover Stories That Matter
            </h2>
        </div>
    </div>
  );
};

export default Home;