import React from "react"
import { team } from "../about//dummydata"
import "./team.css"

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src="https://cdn.pixabay.com/photo/2017/03/22/18/54/study-2166061_1280.jpg" alt="" />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-youtube icon'></i>
              <i className='fab fa-linkedin icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>

        </div>
      ))}
    </>
  )
}

export default TeamCard
