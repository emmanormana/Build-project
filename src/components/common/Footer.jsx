import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className='left-content'>
          <h4>About Use My Tools</h4>
          <div className='text-content'>
            <p>Company</p>
            <p>Careers</p>
          </div>
        </div>
        <div className='center-content'>
          <h4>Legal</h4>
          <div className='text-content'>
            <p>Terms and Conditions</p>
            <p>Dispute Process</p>
          </div>
        </div>
        <div className='right-content'>
          <h4>Contact Us</h4>
          <div className='text-content'>
            <p>email <a
              href="mailto:info@usemytools.com">info@usemytools.com</a>
            </p>
            <p>phone 888-122-6565</p>
          </div>
        </div>
      </div>
    </footer>);
};

export default Footer;