import React from 'react'

//Material-UI
import Grid from '@mui/material/Grid'

import './Footer.css'
import logo from '../../assets/Icons/logo.png'

const Footer = () => {

    const SOCIAL_LINKS = [
        {id: "1", url : "https://www.twitter.com", className: "fab fa-twitter", title: "Twitter"},
        {id: "2", url : "https://www.facebook.com", className: "fab fa-facebook", title: "Facebook"},
        {id: "3", url : "https://www.instagram.com", className: "fab fa-instagram", title: "Instagram"},
    ]

    const LINKS = [
        {id : "1", href : "#", title: "Home"},
        {id : "2", href : "#", title: "Movies"},
        {id : "3", href : "#", title: "Theatres"},
        {id : "4", href : "#", title: "Contact"},
        {id : "5", href : "#", title: "News"},
    ]

    const renderLinks = () => {
        return (
            <div className = "content_wrapper_items_right">
                <div className = "wrapper_item-caption">
                    <p>Pages</p>
                    <div className = "footer_nav_ul">
                        { LINKS.map(item => {
                            const {href, title, id} = item
                            return (
                                <li className = "menu__item" key = {id}>
                                    <a href = {href} className = "menu__link">{title}</a>
                                </li>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }

    const renderSocials = () => {
        return (
            <div className = "content_wrapper_items_left">
                <div className = "wrapper_item-caption">
                    <p>Follow us</p>
                    <div className = "footer-social">
                        { SOCIAL_LINKS.map(item => {
                            const {id, url, className} = item
                            return (
                                <a href = {url} target = "_blank" rel = "noreferrer noopener" key = {id}>
                                    <i className = {className}/>
                                </a>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }

    const renderFooterMainContent = () => {
        return (
            <div className = 'footer_main_content_wrapper'>
                <div className = 'content_wrapper_logo'>
                    <img src = {logo} alt = "Tick Show"/>
                    <h1>Tick Show</h1>
                </div>
                <div className = "content_wrapper_items">
                    <Grid container>
                        <Grid item xs = {12} sm = {6} md = {6}>
                            { renderSocials() }
                        </Grid>
                        <Grid item xs = {12} sm = {6} md = {6}>
                            { renderLinks() }
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    const renderFooterBottom = () => {
        return (
            <div className = "footer_bottom">
                <div className = "footer_bottom_content_wrapper">
                    <div className = "footer_bottom_copyrights">
                        <p>
                            Copyright © 2021 All rights reserved 
                            | Designed by <i className = "fa fa-heart color-primary" aria-hidden = "true"/> 
                            <span> S.Pragashraj </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className = 'footer_root'>
            <div className = 'footer_container'>
                { renderFooterMainContent() }
                { renderFooterBottom() }
            </div>
        </div>
    )
}

export default Footer