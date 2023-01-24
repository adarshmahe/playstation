import React from 'react';
import footerLogo from '../../Assets/Images/ps-old-logo.svg';

export default function Footer() {
  return (
    <div className='footer text-white py-5 d-flex justify-center' style={{backgroundColor: "#00439c"}}>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <img src={footerLogo} alt="ps logo" />
                </div>
                <div className='col-md-8 text-md-end mt-4'>
                    <p>Website ©2023 Sony Interactive Entertainment Europe Limited. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved. More info</p>
                </div>
            </div>
        </div>
    </div>
  )
}
