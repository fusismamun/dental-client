import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase_init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import headerbg from '../../images/appointment.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token]= useToken(user || guser);

    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gloading) {
        return <Loading></Loading>
    }

    if (error || gerror) {
        signInError = <p className='text-red-600'>{error?.message || gerror.message}</p>
    }
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center' style={{
            background: `url(${headerbg})`
        }}>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provided a valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p>New to doctor dental? <Link to="/register" className='font-bold'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent"><FcGoogle style={{margin:'5px', fontSize: '25px'}}></FcGoogle>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;