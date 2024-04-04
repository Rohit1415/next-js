import React from 'react';
import style from '../style/about.module.scss';

const About = () => {
  return (
    <>
    <div className={style.about_bg_wrapper}>
        <div className={style.about_bg_overlay}></div>
        <div className={style.about_bg_content}>
            <h1>
                About Us
            </h1>
            <h2>
                Your Source for Enlightening Content and Inspiring Stories
            </h2>
        </div>
    </div>
    <div className={style.about_content_warapper}>
        <div className={style.about_content}>
            <p>
                Welcome to Blogify! {"We're"} thrilled to have you here and to introduce you to our vibrant community of readers and writers. Blogify is more than just a blog {"–"} {"it's"} your go-to destination for thought-provoking articles, captivating stories, and engaging discussions.
            </p>
            <p>
                Our mission at Blogify is simple yet profound: to provide you with high-quality content that enriches your mind, stirs your imagination, and leaves you inspired. We believe in the power of words to educate, entertain, and connect people from all walks of life. Whether {"you're"} seeking practical advice, exploring new ideas, or simply looking for a moment of inspiration, {"you'll"} find it here at Blogify.
            </p>
            <p>
                Our team of passionate writers and editors is dedicated to curating an eclectic mix of topics and perspectives, covering everything from technology and science to art and culture. {"We're"} committed to delivering content that sparks curiosity, fosters empathy, and encourages meaningful conversations. At Blogify, we believe in the value of diverse voices and experiences, and we strive to create a space where everyone feels welcome and heard.
            </p>
            <p>
                So whether {"you're"} a seasoned reader or a first-time visitor, we invite you to explore, engage, and immerse yourself in the world of Blogify. Join us on this journey of discovery, learning, and inspiration. Together, {"let's"} explore the boundless possibilities of the written word and celebrate the beauty of storytelling. Welcome to Blogify {"–"} where ideas come to life and stories unfold.
            </p>
        </div>
        
    </div>
    </>
  );
};

export default About;