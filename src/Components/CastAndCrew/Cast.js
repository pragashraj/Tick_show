import React from 'react'

import Member from './Member'

import './CastAndCrew.css'

const Cast = ({src, name, character}) => {
    return (
        <div className = 'cast_crew_root'>
            <Member src = {src}/>
            <div className = 'cast_crew_info'>
                <span className = 'cast_crew_name'>{name}</span>
                <span className = 'cast_crew_profession'>as</span>
                <span className = 'cast_crew_character'>{character}</span> 
            </div>
        </div>
    )
}

export default Cast