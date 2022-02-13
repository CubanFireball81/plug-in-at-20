import React from 'react';
import qr from '../Assets/Images/SMS-QR-Code-2.svg';






const QRCode = () => {
    return (
        <div className='QRCode'>
            <img src={qr} width='250' height='400' alt='QR scan code' />
        </div>
    )
}

export default QRCode;