import style from '../style/nextjs_skills.module.scss';

const NextjsSkillsPoint1 = () => {
    return (
        <div className={style.img_wrapper}>
            <img loading='lazy' src='/static/dummy.jpg' alt="test_img" className={style.image} /> 
        </div>
    );
};

export default NextjsSkillsPoint1;
