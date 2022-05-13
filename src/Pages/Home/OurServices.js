import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';

const OurServices = () => {
    return (
        <div className='my-28'>
            <div className='text-center uppercase'>
                <h3 className='text-primary text-xl'>OUR SERVICES</h3>
                <h1 className='text-accent text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service cardTitle='Fluoride Treatment' CartBody='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={fluoride} />
                <Service cardTitle='Cavity Filling' CartBody='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={cavity} />
                <Service cardTitle='Teeth Whitening' CartBody='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={whitening} />
            </div>

            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-left w-auto'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <MainButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;