import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function ListItem(props) {
    const { text, icon } = props;
    return (
        <div className="items" title={text}>
            <FontAwesomeIcon icon={icon} style={{ height: 22, width: 22 }} />
            <p className="items-text">{text}</p>
        </div>
    )
}