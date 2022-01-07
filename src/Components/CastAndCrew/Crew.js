import React from 'react'

import Member from './Member'

import './CastAndCrew.css'

const Crew = ({src, name, profession}) => {
    return (
        <div className = 'cast_crew_root'>
            <Member src = {src}/>
            <div className = 'cast_crew_info'>
                <span className = 'cast_crew_name'>{name}</span>
                <span className = 'cast_crew_profession'>{profession}</span>
            </div>
        </div>
    )
}

export default Crew