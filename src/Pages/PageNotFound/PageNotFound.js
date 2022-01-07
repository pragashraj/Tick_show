import React, { Component } from 'react'

import './PageNotFound.css'

class PageNotFound extends Component {
    render() {
        return (
            <div className = 'page_not_found_root'>
                <div className = "page_not_found_container">
                    <div className = "notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <a href = "/">Home</a>
                </div>
            </div>
        )
    }
}

export default PageNotFound