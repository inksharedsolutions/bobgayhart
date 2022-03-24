import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/JamesWBosleybook.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
                
                     <div className="grid-flex-row">
                               <h1>
                                    <span>Featured Book</span>
                                </h1>
                        
                        <hr className="hr-line"></hr>
                        
                        <div className="grid-two-columns" id="wrapper-two-books">

                            <div className="book-wraps">
                                <img src={FrontBook} alt="book-img" />
                            </div>
                        

                            <div className="content-wraps">

                                {/* <span className="italic-tag">
                                    Read, and learn in various formats
                                </span>

                                <h1 className="head ing--featured">
                                    <span>Featured</span>
                                    <span>Book</span>
                                </h1> */}

                                <div className="grid-child" id="author-contents">
                                    <p id="book-content">
                                        This story is about a hero who through hard work and perseverance and with allies has built up two cities in lands that were his ancestral lands. Until recently and with a non-aggression treaty in place such construction would not have been possible. 
                                    </p>
                                    
                                    <button className="btn-book-featured">
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default MidBook