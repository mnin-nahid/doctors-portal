import React from 'react';

const Service = ({img, cardTitle, CartBody}) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>{CartBody}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;