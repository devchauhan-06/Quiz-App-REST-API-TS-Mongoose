import React, { useState } from 'react'
import { registerUser, logInUser } from '../api/api'
import '../styles/register.css'
import Animation from '../components/Animation/Animation'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { addToken } from '../store/slices/tokenSlice'
import { useFormik } from "formik";
import { signUpSchema } from '../schemas'
import { logInSchema } from '../schemas'
import FormInput from '../components/FormInput/FormInput'

const Register = () => {

    const dispatch = useDispatch();

    const formikSignUp =
        useFormik({
            initialValues: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            validationSchema: signUpSchema,
            onSubmit: async (values, action) => {
                try {
                    console.log(values);
                    await toast.promise(
                        registerUser(values).then(res => {
                            console.log(res.data.status)
                            if (res.data.status === 'success') {
                                if (res.data.data.token) {
                                    dispatch(addToken(res.data.data.token))
                                    navigate("/verifyOtp")
                                }
                                action.resetForm();
                            }
                        }),
                        {
                            pending: 'Your request is being processed...',
                            success: 'OTP sent to your mail!'
                        }
                    );

                } catch (error) {
                    toast.error(error.response.data.data[0].msg);
                }
            },
        });

    const formikLogIn =
        useFormik({
            initialValues: {
                email: '',
                password: '',
            },
            validationSchema: logInSchema,
            onSubmit: async (values, action) => {
                try {
                    console.log(values);
                    await toast.promise(
                        logInUser(values).then(res => {
                            console.log(res.data.status)
                            if (res.data.status === 'success') {
                                dispatch(addToken(res.data.data.token))
                                navigate("/verifyotp");
                                action.resetForm();
                            }
                        }),
                        {
                            pending: 'Your request is being processed...',
                            success: 'Succesfully Logged In!',
                        }
                    );

                } catch (error) {
                    toast.error(error.response.data.message)
                }
            },
        });

        const handleForgotPasswordClick = () =>{
            navigate("/auth/forgotpassword")
        }

    const [isActive, setIsActive] = useState(false);

    const handleLoginClick = () => {
        setIsActive(true);
    };

    const handleSignupClick = () => {
        setIsActive(false);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <div className="wrapper container-fluid" onClick={() => handleClick()}>
                <div className="row background__container">
                    <div className="col-7"></div>
                    <div className="col-5 mt-5 pt-4 register__animation"><Animation /></div>
                </div>

            </div>

            <section className={isActive ? 'wrapper_modal active' : 'wrapper_modal'} >
                <div className="form signup">
                    <header onClick={handleSignupClick} >Signup</header>
                    <i onClick={() => handleClick()} className="uil uil-times close_modal"></i>
                    <form onSubmit={formikSignUp.handleSubmit}>

                        <FormInput
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formikSignUp.values.name}
                            onChange={formikSignUp.handleChange}
                            onBlur={formikSignUp.handleBlur}
                            error={formikSignUp.errors.name}
                            touched={formikSignUp.touched.name}
                        />

                        <FormInput
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formikSignUp.values.email}
                            onChange={formikSignUp.handleChange}
                            onBlur={formikSignUp.handleBlur}
                            error={formikSignUp.errors.email}
                            touched={formikSignUp.touched.email}
                        />

                        <FormInput
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formikSignUp.values.password}
                            onChange={formikSignUp.handleChange}
                            onBlur={formikSignUp.handleBlur}
                            error={formikSignUp.errors.password}
                            touched={formikSignUp.touched.password}
                        />

                        <FormInput
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={formikSignUp.values.confirmPassword}
                            onChange={formikSignUp.handleChange}
                            onBlur={formikSignUp.handleBlur}
                            error={formikSignUp.errors.confirmPassword}
                            touched={formikSignUp.touched.confirmPassword}
                        />
                        <input type="submit" value="Signup" />
                    </form>
                </div>
                <div className="form login">
                    <header onClick={handleLoginClick} >Login</header>
                    <form onSubmit={formikLogIn.handleSubmit}>

                        <FormInput
                            type="email"
                            name="email"
                            id="loginEmail"
                            placeholder="Email"
                            value={formikLogIn.values.email}
                            onChange={formikLogIn.handleChange}
                            onBlur={formikLogIn.handleBlur}
                            error={formikLogIn.errors.email}
                            touched={formikLogIn.touched.email}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            id="loginPassword"
                            placeholder="Password"
                            value={formikLogIn.values.password}
                            onChange={formikLogIn.handleChange}
                            onBlur={formikLogIn.handleBlur}
                            error={formikLogIn.errors.password}
                            touched={formikLogIn.touched.password}
                        />
                        <div className='forgotPassword' onClick={handleForgotPasswordClick}>Forgot password?</div>
                        <input type="submit" value="Login" />

                    </form>
                </div>



            </section>

        </>
    )
}


export default Register
