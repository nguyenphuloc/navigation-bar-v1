import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const LogoContent = (props) => {
    const {widthLogo, handleOnClick, icon} = props;
    return(
        <div class="logo_content">
          <div class="logo" style={{width: widthLogo}}>
            <div class="logo_name">CodingLab</div>
          </div>
          <button onClick={handleOnClick} class='btn'>
            <FontAwesomeIcon icon={icon}/>
          </button>
        </div>
    )
}
export default LogoContent;