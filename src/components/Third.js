 import React from 'react';
 import ServicesDetailedCaruselTho from "./carusel_tho/CaryselCard";

const Third_screen = () => {
    return (
        <div className="Third_screen">
            <div className="container">
            <div className="row  justify-content-md-center">
                <div className="col-lg img-bogdan">
                    <img className="deck frame" src="/images/Third/bognan.png"/>
                    <img className="mobil frame" src="/images/Third/bordan_mini.png"/>
                </div>
                <div className="text col-lg-6">
                <h2 className="one">
                    Меня зовут Богдан.
                    <br/>
                    Я&nbsp;-&nbsp;предприниматель
                </h2>
                    <p className="one">
                        Мой основной бизнес - подбору персонала в IT. Также мы занимаемся разработкой ПО
                    </p>
                    <h2 className="tho">
                        Я люблю Римворлд и хочу создать сервер
                    </h2>
                    <p className="tho">
                        на котором игроки смогут комфортно выстраивать свои взаимоотношения, создавать союзы и полноценно воевать. В общем - цивилизованно сосуществовать и получать от этого дела удовольствие


                    </p>
                </div>
            </div>
                <div className="row justify-content-md-center">
                <div className="but row">
                    <button className="row justify-content-center">
                        <img src="/images/Third/Polygon.png"/>
                        <h3>
                        видео демонстрация
                    </h3>
                    </button>
                    <div className="col-lg">
                        <h1>
                            Наша команда
                        </h1>
                        <h1 className="search">
                            Сейчас мы также в поиске:
                        </h1>
                    </div>
                    <div className="col-lg">
                        <h3>
                            Сейчас над проектом работает<strong>5 человек</strong>
                            Это как старый штат проекта Rimworld Online, так и мои сотрудники-разработчики

                        </h3>
                    </div>
                </div>
                <div className="caryselMiniDiv">
                <ServicesDetailedCaruselTho/>
                </div>
            </div>

        </div>
        </div>

    )
};

export default Third_screen;