import React from "react"
import "./hero.css"
import Title from"../../common/title/Title"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitel='WELCOME TO TuteMap' title='Best Online Education' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus in iste, debitis impedit illo saepe magnam optio repellendus necessitatibus iure facilis minima delectus culpa explicabo animi similique accusamus ducimus!</p>
            <div className="button">
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
                <button>
                  VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
