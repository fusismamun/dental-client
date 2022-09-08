import React from 'react';
import contactbg from '../../images/appointment.png'

const Contactus = () => {
    return (
        <section style={{
            background: `url(${contactbg})`
        }}
        className='my-28'

        >
            <div className='mt-28 pt-8'>
                <h6 className='text-lg font-bold text-secondary'>Contact US</h6>
                <h2 className='text-3xl my-5 text-white'>Stay Connected With Us</h2>
            </div>
            <div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text  text-white">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered w-80" />
                                </div>
                                <div class="form-control">
                                    <label class="label ">
                                        <span class="label-text  text-white">Subject</span>
                                    </label>
                                    <input type="text" placeholder="subject" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">Message</span>
                                    </label>
                                    <textarea class="textarea textarea-bordered h-24" placeholder="your message"></textarea>
                                </div>
                                <div class="form-control mt-6">
                                <button class="btn btn-secondary text-white font-bold bg-gradient-to-r from-primary to-secondary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactus;