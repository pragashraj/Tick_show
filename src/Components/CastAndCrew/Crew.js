import React from 'react'

import Member from './Member'

import './CastAndCrew.css'

const Crew = () => {
    return (
        <div className = 'cast_crew_root'>
            <Member/>
            <div className = 'cast_crew_info'>
                <span className = 'cast_crew_name'>James Watts</span>
                <span className = 'cast_crew_profession'>Director</span>
            </div>
        </div>
    )
}

export default Crew