import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const ServicesDetailedCaruselTho = () => {
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        // {width:560, itemsToShow: 2, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];
    return (
        <Carousel breakPoints={breakPoints}
                  easing="cubic-bezier(1,.15,.55,1.54)"
                  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                  transitionMs={700}
                  enableAutoPlay autoPlaySpeed={4000}
                  // onResize={currentBreakPoint => console.log(currentBreakPoint)}
        >
            <div className="ServDetailed-slider_img_small">
                <img src="../../images/carysel/screenOne.png" />
            </div>
            <div className="ServDetailed-slider_img_small">
                <img src="../../images/carysel/screenTwo.png" />

            </div>
            <div className="ServDetailed-slider_img_small">
                <img src="../../images/carysel/screenThree.png" />
            </div>
            <div className="ServDetailed-slider_img_small">
                <img src="../../images/carysel/screenFour.png" />
            </div>
            <div className="ServDetailed-slider_img_small">
                <img src="../../images/carysel/screenFive.png" />
            </div>



        </Carousel>
    );
};

export default ServicesDetailedCaruselTho;