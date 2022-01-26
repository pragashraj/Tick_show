import React, {useState} from 'react'

import Newsletter from '../NewsLetter/Newsletter'

//Material-UI
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import './Footer.css'
import logo from '../../assets/Icons/logo.png'

const Footer = () => {
    const [email, setEmail] = useState("")

    const SOCIAL_LINKS = [
        {id: "1", url : "https://twitter.com", title: "Twitter"},
        {id: "2", url : "https://www.facebook.com", title: "Facebook"},
        {id: "3", url : "https://www.instagram.com", title: "Instagram"},
    ]

    const LINKS = [
        {id : "1", href : "/", title: "Home"},
        {id : "2", href : "/movies", title: "Movies"},
        {id : "3", href : "/theatres", title: "Theatres"},
        {id : "4", href : "/contacts", title: "Contact"},
        {id : "5", href : "/events", title: "Events"},
    ]

    const handleSubcribeOnClick = (e) => {
        e.preventDefault()
    }

    const handleInputOnChange = (e) => {
        setEmail(e.target.vale)
    }

    const getSocialIcon = (title) => {
        switch(title) {
            case "Facebook": return <FacebookIcon sx = {{width: "100%", height: "100%"}}/>
            case "Twitter": return <TwitterIcon sx = {{width: "100%", height: "100%"}}/>
            case "Instagram": return <InstagramIcon sx = {{width: "100%", height: "100%"}}/>
            default : return
        }
    }

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
                            const {id, url, title} = item
                            return (
                                <a href = {url} target = "_blank" rel = "noreferrer noopener" key = {id}>
                                    { getSocialIcon(title) }
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
                    <h1>@Tick Show</h1>
                </div>
                <div className = "content_wrapper_items">
                    <Grid container>
                        <Grid item xs = {12} sm = {4} md = {6}>
                            { renderSocials() }
                        </Grid>
                        <Grid item xs = {12} sm = {8} md = {6}>
                            { renderLinks() }
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    const renderNewsLetter = () => {
        return (
            <div className = "subscribe_newsletter">
                <Grid container spacing = {5}>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <div className = "newsletter_text">
                            <h3>Stay Updated</h3>
                            <p>Your domain control panel is designed for ease-of-use and allows for all aspects of yours</p>
                        </div>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <Newsletter 
                            value = {email} 
                            onChange = {handleInputOnChange}
                            onSubmit = {handleSubcribeOnClick}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

    const renderFooterBottom = () => {
        return (
            <div className = "footer_bottom">
                <div className = "footer_bottom_content_wrapper">
                    <div className = "footer_bottom_copyrights">
                        <p>
                            Copyright © 2021/22 All rights reserved 
                            | Designed by <i className = "fa fa-heart color-primary" aria-hidden = "true"/> 
                            <span> S.Pragashraj </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className= 'footer_parallax'>
            <div className = 'footer_root'>
                <div className = 'footer_container'>
                    { renderFooterMainContent() }
                    { renderNewsLetter() }
                    <Divider/>
                    { renderFooterBottom() }
                </div>
            </div>
        </div>
    )
}

export default Footer