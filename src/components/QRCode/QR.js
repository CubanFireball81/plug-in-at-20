import React from 'react';
import qr from '../Assets/Images/SMS-QR-Code-2.svg';
import 'animate.css';






const QRCode = () => {
    return (
        <div className='QRCode'>
            <img src={qr} width='350' height='400' alt='QR scan code' className='animate__animated animate__lightSpeedInRight'/>
        </div>
    )
}

export default QRCode;