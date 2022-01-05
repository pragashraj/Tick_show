import React from 'react'

import Member from './Member'

import './CastAndCrew.css'

const Cast = () => {
    return (
        <div className = 'cast_crew_root'>
            <Member/>
            <div className = 'cast_crew_info'>
                <span className = 'cast_crew_name'>Tom Holland</span>
                <span className = 'cast_crew_profession'>as</span>
                <span className = 'cast_crew_character'>Peter Parker</span> 
            </div>
        </div>
    )
}

export default Cast