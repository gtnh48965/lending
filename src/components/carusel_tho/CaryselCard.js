import React from 'react';
import Carousel, {consts} from "react-elastic-carousel";

const ServicesDetailedCaruselTho  = () => {
    const breakPoints = [
        {width:0, itemsToShow: 1, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
        {width:560, itemsToShow: 2, className: "TexnologyCarusel", showArrows: true, pagination: false, enableMouseSwipe: false, disableArrowsOnEnd: true},
    ];
    return (
        <Carousel breakPoints={breakPoints}
                  easing="cubic-bezier(1,.15,.55,1.54)"
                  onResize={currentBreakPoint => console.log(currentBreakPoint)}
        >
            <div className="caryselMini">
                <img  src="../../images/caryselMini/develiper.png" />
                <div>
                    <h1>
                        Гейммастера
                    </h1>
                    <p>
                        (человек, который будет вести общую историю сервера)
                    </p>
                </div>
            </div>
            <div className="caryselMini">
                <img  src="../../images/caryselMini/geimdef.png" />
                <div>
                    <h1>
                        Unity разработчика
                    </h1>
                    <p>
                        (человек с опытом работы в специфике Rimworld, в идеале - мододел)
                    </p>
                </div>
            </div>




        </Carousel>
    );
};

export default ServicesDetailedCaruselTho;