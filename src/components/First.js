import React, {useState} from 'react';
// import {observer} from "mobx-react-lite";

const First_screen = () => {
    return (
        <div className="First_screen">
    <div className="fon container">
    <div className="row block align-items-end">
        <div className="col-lg img">
            <div className="deck">
             <img src="/images/people.png"/>
            </div>
            <div className="mobil">
                <img src = "/images/peooleMini.png" />
            </div>
    </div>
        <div className="col-lg-5 rimword">
        <img src="/images/rimworld_logo.png"/>
            <h1>Римворлд Онлайн</h1>
            <p>Генератор захватывающих историй с живыми людьми</p>
            <div className="button row">

                <a className="col-lg-1" href="https://discord.gg/2XBAchnydf"><button className="one">Перейти на форум</button></a>
                <a className="col-lg-1" href="https://discord.gg/2XBAchnydf"><button className="tho">Перейти к серверам</button></a>

            </div>
    </div>
    </div>
    </div>
        </div>

    )
};

export default First_screen;