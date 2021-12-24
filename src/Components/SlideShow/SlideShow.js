import React from 'react'

import SimpleImageSlider from "react-simple-image-slider"

import Paper from '@mui/material/Paper'

import CustomCssButton from '../CustomCssButton/CustomCssButton'

import './SlideShow.css'

const SlideShow = ({images, coverInfo, carouselOnChange, handleBuyTicketOnClick}) => {
    const {title, synopsis} = coverInfo

    const handleCarouselOnChange = (type, idx) => {
        let index = 0
        switch(type) {
            case "bulletIndex": index = idx
                break
            case "CompleteSlide": index = idx - 1
                break
            default: index = 0
        }

        carouselOnChange(index)
    }

    return (
        <div>
            <div className = 'carousel_vertical_cover'>
                <Paper elevation = {5} sx = {{height: "100%", backgroundColor: "rgba(44, 62, 80, 0.6)"}}>
                    <div className = 'carousel_vertical_info'>
                        <h2>{title}</h2>
                        <div className = 'info_synopsis'>
                            <span>SYNOPSIS</span>
                            <p>{synopsis}</p>
                        </div>
                        <CustomCssButton label = "Buy Tickets" onClick = {handleBuyTicketOnClick}/>
                    </div>
                </Paper>
            </div>
            <SimpleImageSlider
                width = {"100%"}
                height = {"92vh"}
                images = {images}
                showBullets = {true}
                showNavs = {false}
                loop = {true}
                autoPlay = {true}
                autoPlayDelay = {5.0}
                onClickBullets = {idx => { handleCarouselOnChange("bulletIndex", idx) }}
                onCompleteSlide = {idx => { handleCarouselOnChange("CompleteSlide", idx) }}
            />
        </div>
    )
}

export default SlideShow