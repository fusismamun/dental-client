import React from 'react';


const Cardinfo = ({img, cartTitle, cardDetails, bgClass}) => {
    return (
        <div class={` card lg:card-side bg-base-100 shadow-xl  ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body text-white text-left">
                <h2 class="card-title">{cartTitle}</h2>
                <p>{cardDetails}</p>
            </div>
        </div>
    );
};

export default Cardinfo;