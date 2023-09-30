import React from 'react';

const Service = ({img, cardTitle, CartBody}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{CartBody}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;