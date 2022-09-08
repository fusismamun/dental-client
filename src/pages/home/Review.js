import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card  bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.description}</p>
                <div class="flex items-center">
                    <div>
                        <div class="avatar">
                            <div class="w-20 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                                <img src={review.img} alt="imge"/>
                            </div>
                        </div>
                    </div>
                    <div className='text-left' >
                        <h6 className='font-bold'>{review.name}</h6>
                        <h6 className='font-medium'>{review.location}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;