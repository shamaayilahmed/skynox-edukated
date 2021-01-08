import React from 'react'
import boy from '../images/avatars/boy.svg'
import boy1 from '../images/avatars/boy-1.svg'
import girl1 from '../images/avatars/girl-1.svg'
import girl from '../images/avatars/girl.svg'
import man from '../images/avatars/man.svg'
import man1 from '../images/avatars/man-1.svg'
import man2 from '../images/avatars/man-2.svg'
import man3 from '../images/avatars/man-3.svg'
import man4 from '../images/avatars/man-4.svg'

import il from '../images/illustrations/101-gym-guy.svg'
import il1 from '../images/illustrations/105-freelancer.svg'
import il2 from '../images/illustrations/110-sega-megdrive.svg'
import il3 from '../images/illustrations/117-ironman.svg'
import il4 from '../images/illustrations/119-working.svg'

const Content = () => {
  return (
    <article className="grid content">
      <div className="heading popular"><h3>Popular</h3></div>
      <div className="one">
        <div className="overlay">
          <div className="user">
            <div className="image">
              <img src={girl} alt="" />
            </div>
            <p>Giya <br /> @giyabliss</p>
          </div>
          <div className="time">92 mins</div>
          <div className="text">
            <p>Learn to create illustrations using Adobe XD</p>
          </div>
        </div>
        <img src={il} alt="" />
      </div>

      <div className="two">
        <div className="overlay">
          <div className="user">
            <div className="image">
              <img src={man2} alt="" />
            </div>
            <p>Alan <br /> @alanfred</p>
          </div>
          <div className="time">80 mins</div>
          <div className="text">
            <p>Use the latest tools like Figma to explore</p>
          </div>
        </div>
        <img src={il3} alt="" />
      </div>

      <div className="three">main</div>
      <div className="four">main</div>
      <div className="five">main</div>

      <div className="heading tutor"><h3>Top Tutor</h3></div>
      <div className="tut1">tutor</div>
      <div className="tut2">tutor</div>
      <div className="tut3">tutor</div>
      <div className="tut4">tutor</div>
      <div className="offer">Offer</div>
    </article>
  )
}

export default Content
