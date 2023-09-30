import React from 'react';
import background from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';

const StayConnected = () => {
    return (
        <div className='text-center py-5 space-y-3'
            style={{
                background: `url(${background})`
            }}>
            <div>
                <h3 className='text-primary'>Contact Us</h3>
                <h1 className='text-3xl text-white '>Stay connected with us</h1>
            </div>
            <input type="text" placeholder="Type here" className="input h-10 w-full max-w-xs" />
            <br />
            <input type="text" placeholder="Type here" className="input h-10 w-full max-w-xs" />
            <br />
            <textarea placeholder='Enter your message hear.' className='input h-24 w-full max-w-xs' cols="41" rows="6"></textarea>
            <br />
            <MainButton></MainButton>
        </div>
    );
};

export default StayConnected;