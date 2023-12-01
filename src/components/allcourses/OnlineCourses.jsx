import React from "react"
import Title from "../common/title/Title"
import { online } from "../about/dummydata"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
            <Title subtitel='COURSES' title='Browse Our Online Courses' />
            <div className='content grid3'>
                {online.map((val) => (
                    <div className='box'>
                        <div className='img'>
                            <img src="https://d3nn873nee648n.cloudfront.net/1200x1800-new/18895/SM875899.jpg" alt='' />
                            <img src={val.hoverCover} alt='' className='show'/>
                        </div>
                        <h1>{val.courseName}</h1>
                        <span>{val.course}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
