import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function ProfileContent(props) {
    const { avt, name, icon,} = props;
    return (
        <div className="profileContent">
            <img src={avt} alt="avt" className="avt"/>
            <span className="name">{name}</span>
            <div className="profileIcon" >
                <FontAwesomeIcon icon={icon} style={{width: 22, height: 22}} />
            </div>
        </div>
    )
}