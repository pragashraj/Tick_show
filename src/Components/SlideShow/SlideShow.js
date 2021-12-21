import React from 'react'

import SimpleImageSlider from "react-simple-image-slider"

import Paper from '@mui/material/Paper'

import CustomCssButton from '../CustomCssButton/CustomCssButton'

import './SlideShow.css'

const SlideShow = ({images, coverInfo, carouselOnChange, handleBuyTicketOnClick}) => {
    const {title} = coverInfo

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
                <Paper elevation = {5} sx = {{height: "100%", backgroundColor: "rgba(247, 64, 31, 0.3)"}}>
                    <div className = 'carousel_vertical_info'>
                        <h2>{title}</h2>
                        <div className = 'info_synopsis'>
                            <span>SYNOPSIS</span>
                            <p>
                                After Peter Parker's identity as Spider-Man was 
                                exposed by Mysterio at the end of Spider-Man: Far From Home (2019), his life and reputation are 
                                turned upside down. 
                                Parker asks Dr. Stephen Strange to help restore his secret identity with magic, 
                                but this breaks open the multiverse, 
                                allowing supervillains from alternate realities who previously fought versions of Spider-Man to arrive
                            </p>
                        </div>
                        <CustomCssButton label = "Buy Tickets" onClick = {handleBuyTicketOnClick}/>
                    </div>
                </Paper>
            </div>
            <SimpleImageSlider
                width = {"100%"}
                height = {"80vh"}
                images = {images}
                showBullets = {true}
                showNavs = {false}
                loop = {true}
                autoPlay = {true}
                autoPlayDelay = {3.0}
                onClickBullets = {idx => { handleCarouselOnChange("bulletIndex", idx) }}
                onCompleteSlide = {idx => { handleCarouselOnChange("CompleteSlide", idx) }}
            />
        </div>
    )
}

export default SlideShow