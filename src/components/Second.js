import React from 'react';
import CaryselCard from "../components/carusel/CaryselCard"
import CaryselCardMin from "../components/carusel/CaryselCardMin"

const Second_screen = () => {
    return (
        <div className="Second_screen">
        <div className="container">
            <div className="row block ">

        <div className="col-xl-6 text">
            <h1>
                Римворлд
            </h1>
            <p>
                Это Комплекс Серверов постро- енных на базе мультиплеера OnlineCity!
                <br/>
                <br/>
                Задача нашего проекта - создать на базе этой модификации и сущ- ествующих решений работоспособный игровой клиент, который позволит игрокам полноценно вступать в pvp сражения
                <br/>
                <br/>
                В дальнейшем вести торговлю, дипломатию и социальную активность

            </p>
        </div>
        <div className="col-xl-6 carysel">
            <CaryselCard/>
        </div>
                <div className="col-xl-6 caryselMin">
                    <CaryselCardMin/>
                </div>
        </div>
        </div>
        </div>

    )
};

export default Second_screen;