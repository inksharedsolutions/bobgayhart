import React from 'react'
import AuthorImg from '../../static/author/dummy-profile.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";
import { Link } from 'gatsby'

const Author = () => {
    return (
        <>
            <section className="upper-main-author" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <h1 className="author-name-tag">
                            <span>Robert Gayhart</span>
                        </h1>

                        <p className="author-p">
                            Born in central Texas, now lives in East Texas. Started
                            playing Fantasy Roll Play Games in 1984, MERP (Middle
                            Earth Roll Play), some GURP’s and a lot of Role Master....
                        </p>

                       

                        {/* <span className="author-tagline">
                            Author & Writer
                        </span> */}

                        <button className="btn-about-author">
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                        <div className="about-author-line">
                                <h1>
                                    <span>About The Author</span>
                                </h1>
                        
                            <hr className="hr-line"></hr>
                        </div>

                    {/* <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Author;