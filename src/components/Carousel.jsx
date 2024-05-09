import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentIndex: 0,
        };
    }
    
    handlePrev = () => {
        this.setState((prev) => ({
            currentIndex: prev.currentIndex === 0 ? images.length - 1 : prev.currentIndex - 1,
        }));
    };

    handleNext = () => {
        this.setState((prev) => ({
            currentIndex: prev.currentIndex === images.length - 1 ? 0 : prev.currentIndex + 1,
        }));
    };

    render() {
        return (
            <div className="carousel">
                <div className="images">
                    {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.img}
                        className={index === this.state.currentIndex ? "active" : ""}
                    />
                    ))}
                </div>
                <button className="btn prev-btn" onClick={this.handlePrev}>
                    <ArrowBackIosIcon />
                </button>
                <button className="btn next-btn" onClick={this.handleNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        );
    }  
}

export default Carousel;