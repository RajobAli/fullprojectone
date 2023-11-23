import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';

//photo url : https://i.ibb.co/F3Dh9MS/grow-your-youtube-channel-business-web-banner-template-design-691378-92.jpg
const SignUp = () => {
  const axiosPublic = UseAxiosPublic();


  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const { createUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to database')
                  reset();


                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/');

                }
              })



          })
          .catch(error => console.log(error))
      })
  }
  // console.log(watch("example"))

  return (

    <>
      <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register('photoURL', { required: true })} placeholder="photoURL" className="input input-bordered" />
                {errors.photoURL && <span className='text-red-600'>Photo URL field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <p className='text-red-600'>Email is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true, minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%*])(?=.*[0-9])/

                })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password && <p className='text-red-600'>Password is required</p>}

                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less then 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must at lest one upper case one lower case a special character and a digit</p>}


                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='px-6'><small>Already Have an account
              <Link to="/login">Login</Link>
            </small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;