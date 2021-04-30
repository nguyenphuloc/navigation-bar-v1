import React, { useState } from 'react';
import "./style.css";
import { faThLarge, faSearch, faSignOutAlt, faBars, faUser, faCommentAlt, faChartPie, faFolder, faShoppingCart, faHeart, faCog } from '@fortawesome/free-solid-svg-icons'
import profile from '../image/profile.jpg';
import LogoContent from './LogoContent/index';
import ListItem from './ListItem';
import ListSearch from './ListSearch'
import ProfileContent from './ProfileContent';

const data = [
  { id: "001", text: "DashBoard", icon: faThLarge },
  { id: "002", text: "User", icon: faUser },
  { id: "003", text: "Messages", icon: faCommentAlt },
  { id: "004", text: "Analytics", icon: faChartPie },
  { id: "005", text: "File Manager", icon: faFolder },
  { id: "006", text: "Order", icon: faShoppingCart },
  { id: "007", text: "Save", icon: faHeart },
  { id: "008", text: "Setting", icon: faCog },
]

const NavigationBar = () => {
    const [width, setWidth] = useState('50px');
    const [widthLogo, setWidthLogo] = useState('0px');
    const handleOnClick = () => {
      setWidth(prev => prev === '50px' ? "250px" : '50px');
      setWidthLogo(prev => prev === '0px' ? '150px' : '0px');
    }

    return(
    <div class="container">
      <div className="ctn-sidebar" style={{width: width}}>
        <LogoContent 
          icon={faBars}
          widthLogo={widthLogo}
          handleOnClick={handleOnClick}
        />
        <ListSearch 
            icon={faSearch}
        />
        {data.map(item => (
            <ListItem
                key={item.id}
                text={item.text}
                icon={item.icon}
            />
        ))}
        <ProfileContent
          avt={profile}
          name="Prem Shahi"
          icon={faSignOutAlt}
        />
      </div>
    </div>
  )
}
export default NavigationBar;