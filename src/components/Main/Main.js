import React from 'react';
import './Main.css';
import QRCode from '../QRCode/QR';
import 'animate.css';

const Main = () => {
    return(
        <div>
            <QRCode />
            <div className='MainText'>
                <h1 className='Header'>Plug in at 20º</h1>
                <h3>Receive a reminder via text message each evening
                to plug in your car when the temperature will drop 
                below 20º.</h3>
                <p class="SubText">Just text your zip code to:</p>
                <h2 className='SMSNumber animate__animated animate__lightSpeedInRight'>907-312-2014</h2>
                <p class="SubText">and we'll start sending you reminders.</p>
                <p> Using a block heater reduces engine wear and air pollution. 
                For more information, visit: <a href="https://www.muni.org/Departments/health/Admin/environment/AirQ/Pages/EngineBlockHeater.aspx">Anchorage Environmental Health Services</a>.</p>                
                <p className='Credits'>Created by <a href="http://codeforanchorage.org">Code for Anchorage.</a></p>
                
            </div>
        </div>
    )
}

export default Main;
