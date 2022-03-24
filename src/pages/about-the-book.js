import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'robert-gayhart',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Robert Gayhart" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Calarel`,
                                spanFirst: `The Beginning Journey`,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                        Calarel, a one hundred forty-eight year old High Elf, Highmen mixed-breed female, decided it was time to leave home 
                                        and find out what the world had to offer. What she began to find were friends, then she found enemies and evil. She 
                                        came to the conclusion that she was to fight for the good. And good came her way before she even started to fulfill 
                                        what she thought was her destiny. She learns stories told to scare children are truth. And unbelievable fantasies are true.
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/calarel-robert-gayhart/1140505767?ean=9781648956225',
                                    amazon: 'https://www.amazon.com/Calarel-Beginning-Journey-Robert-Gayhart-ebook/dp/B09LCTMD2P/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1636473400&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Calarel-Beginning-Journey-Robert-Gayhart/dp/1648956211/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1636473400&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/calarel-robert-gayhart/1140505767?ean=9781648956218',
                                    booksamillion: 'https://www.booksamillion.com/p/Calarel/Robert-Gayhart/9781648956218?id=8158356429268',
                                }
                            }}
                        />

                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;