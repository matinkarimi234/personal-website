import React from "react";
import Instagram from './IconsSVGs/Instagram'
import Twitter from './IconsSVGs/Twitter'
import LinkedIn from './IconsSVGs/LinkedIn'
import './Icons.css';

const list = {
    Instagram: Instagram,
    LinkedIn: LinkedIn,
    Twitter: Twitter,
}

const Icons = ({name="Instagram"}) => {

    const Icon = list[name]
    return(
        <span className="Icons">
            <Icon />
        </span>
    )
}
export default Icons