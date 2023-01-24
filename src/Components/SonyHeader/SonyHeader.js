import React from "react";
import './SonyHeader.css';

const SonyHeader = () => {
  return (
    <>
      <div className='container-fluid bg-dark flex-row-reverse d-flex sony-header'>
        <span className='sony-logo' style={{
        backgroundImage:
          "url('https://www.playstation.com/etc.clientlibs/global_pdc/clientlibs/clientlibs-jetstream/resources/assets/fonts/sony_logo.svg')",
      }}></span>
      </div>
    </>
  );
};

export default SonyHeader;
