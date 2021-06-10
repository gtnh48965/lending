import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const ServicesDetailedCaruselOne = () => {
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        // {width:560, itemsToShow: 2, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];
    return (
        <Carousel breakPoints={breakPoints}
                  easing="cubic-bezier(1,.15,.55,1.54)"
                  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                  transitionMs={700}
                  enableAutoPlay autoPlaySpeed={4000}>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img' src="../../images/carysel/screenOne.png" alt=""/>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img' src="../../images/carysel/screenTwo.png" alt=""/>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img' src="../../images/carysel/screenThree.png" alt=""/>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img' src="../../images/carysel/screenFour.png" alt=""/>
            </div>
            <div className='d-flex justify-content-center align-content-center flex-column w-100 position-relative'>
                <img className='ServDetailed-slider_img' src="../../images/carysel/screenFive.png" alt=""/>
            </div>

        </Carousel>
    );
};

export default ServicesDetailedCaruselOne;