import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center'
        style={{
            background: `url(${background})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 py-5 px-8'>
                <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                <h1 className='text-white text-3xl'>Make an appointment Today</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, vero? Quibusdam, temporibus. Delectus illo doloremque repudiandae qui facilis labore magni totam velit expedita aspernatur sed earum minus eos reprehenderit eveniet sequi tempore dolor consequatur nobis odit perferendis, aut sint adipisci?</p>

                <MainButton />
            </div>
        </section>
    );
};

export default MakeAppointment;