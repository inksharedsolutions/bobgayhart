import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
// import Event from '../components/event'


import Banner from '../components/non-front-banner'
// import AuthorImg from '../../static/author/author-profile.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Robert Gayhart" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={DummyImg}
                                    alt="_main_author" />
                            </div>

                            {/* <div className="heading-quote">
                                <h4>
                                    - “What other’s think of me is none of my business.” And “When struggling with a decision, ask yourself this, ‘what is really going to mean a hundred years from now?"
                                    <br />

                                </h4>
                                <p>
                                    <spa className="author-name"></spa
                                         <span className="author-span-ft">Author | Writer </span> 
                                        <span className="ata-name">James Bosley</span>
                                    </span>
                                </p>
                            </div> */}
                        </div>


                        <article className="article-section column" id="author">

                            <p>
                                This is needed to establish a unique and strong foundation about you as the author- Born is central Texas, now lives in East Texas. Started playing Fantasy Roll Play Games in 1984, MERP (Middle Earth Roll Play), some GURP’s and a lot of Role Master. Was a game master for a long time, then the wife at the time wanted to be the Game Master and one of our gaming buddies wanted to be the GM. I was out of work for a little while and bored, a friend said write about the game. That started many years ago. Now I finally have the first book professionally edited and published.
                            </p>



                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Robert Gayhart</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

                {/* <Event /> */}


            </Layout>
        </>
    )
}


export default ATB;
