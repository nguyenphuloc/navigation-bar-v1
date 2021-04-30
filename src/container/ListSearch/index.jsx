import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import Input from '../../components/Input'

export default function ListSearch(props) {
    const { icon } = props;
    return (
        <div class="listSearch">
            <div class="listSearchIcon">
                <FontAwesomeIcon icon={icon} style={{ height: 22, width: 22 }}/>
            </div>
            <Input />
        </div>
            
    )
}