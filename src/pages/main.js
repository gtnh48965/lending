import React, {useEffect, useState} from 'react';
import Fifth_screen from "../components/Fifth";
import Second_screen from "../components/Second";
import Sixth_screen from "../components/Sixth";
import Third_screen from "../components/Third";
import Fourth_screen from "../components/Fourth";
import First_screen from "../components/First";



const Main = () => {

    return (
        <div className="OneScrin">
        <First_screen/>
        <Second_screen/>
        <Third_screen/>
        <Fourth_screen/>
        <Fifth_screen/>
        <Sixth_screen/>
        </div>
    );
};
export default Main;