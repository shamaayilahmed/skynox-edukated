import React from 'react'
import logo from '../logo.svg'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SettingsIcon from '@material-ui/icons/Settings';

import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

import man3 from '../images/avatars/man-3.svg'

const Sidebar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <aside className="grid side">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="bread">
        <div className="flex name">

          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
          >
            <Tab icon={<AppsOutlinedIcon />} color="action" label="Home" />

            <Tab icon={<SearchOutlinedIcon />} label="Discover" />
            <Tab icon={<SmsOutlinedIcon />} label="Message" />
            <Tab icon={<SettingsIcon />} label="Settings" />
          </Tabs>
        </div>
        <div className="flex course">
          <div className="icon"><i class="far fa-lightbulb fa-2x"></i></div>
          <p> <b>Updated Course</b>
            <br />
            <i>by @shamaayil</i></p>
        </div>
      </div>

      <div className="point grid">
        <div className="ping">
          <div className="pointicon">
            <i class='far fa-star'></i>
          </div>
          <div className="actual">
            1900 <br /> points
          </div>
        </div>
        <div className="pong">
          <div className="pointicon">
            <i class='fas fa-battery-half'></i>
          </div>
          <div className="actual">
            48%<br /> complete
          </div>
        </div>
        <div className="character">
          <div className="avatar">
            <img src={man3} alt="" />
          </div>
          <p>Alex Dexen <br /> @alexgrinds</p>
        </div>
      </div>
    </aside >
  )
}

export default Sidebar
