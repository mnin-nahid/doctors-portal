import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () => fetch(`https://calm-crag-79486.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    // useEffect(() => {
    //     fetch(`https://calm-crag-79486.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate]);
    if(isLoading){
        return <Looding></Looding>
    }

    return (
        <div className='my-10'>
            <h2 className='text-primary text-center text-xl font-bold mb-4'>Available Appointment on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} refetch={refetch} date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;