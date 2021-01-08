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

import TextField from '@material-ui/core/TextField';

const Navbar = () => {
  return (
    <nav className="grid nav">
      <div className="flex stories">
        <h4><b>Streaming</b> Now</h4>
        <div className="avas">
          <div className="tars"><img src={boy} alt="" /></div>
          <div className="tars"><img src={man1} alt="" /></div>
          <div className="tars"><img src={girl} alt="" /></div>
          <div className="tars"><img src={boy1} alt="" /></div>
          <div className="tars"><img src={girl1} alt="" /></div>
        </div>

      </div>
      <div className="flex search">
        <h4><b>Advanced</b> search</h4>
        <div className="input">
          <TextField id="outlined-basic" label="Start writing something" variant="outlined" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
