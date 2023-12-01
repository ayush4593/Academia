import React from "react"
import Title from "../common/title/Title"
import asdf from "../../images/about2.jpg"
import { homeAbout } from "./dummydata"
import AWrapper from "./AWrapper"
import "./about.css"

const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container flexSB">
                    <div className="left row">
                        <img src={asdf} alt="asdf" />
                    </div>
                    <div className="right row">
                        <Title subtitel='LEARN ANYTHING' title='Benefits About Online Learing Expertise' />
                        <div className='item'>
                            {homeAbout.map((val) => (
                                <div className='items flexSB'>
                                    <div className='img'>
                                        <img src={val.cover} alt='abc' />
                                    </div>
                                    <div className='text'>
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AWrapper />
        </>
    )
}

export default AboutCard
