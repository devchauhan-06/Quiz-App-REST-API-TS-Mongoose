import React from 'react'
import { forgotPasswordSchema } from '../schemas'
import FormInput from '../components/FormInput/FormInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { forgotPassword } from '../api/api';
import '../styles/forgotPassword.css'

const ForgotPassword = () => {

    const formikForgotPassword =
        useFormik({
            initialValues: {
                email: '',
            },
            validationSchema: forgotPasswordSchema,
            onSubmit: async (values, action) => {
                try {
                    console.log(values);
                    await toast.promise(
                        forgotPassword(values).then(res => {
                            console.log(res.data.status)
                            if (res.data.status === 'success') {
                                action.resetForm();
                            }
                        }),
                        {
                            pending: 'Your request is being processed...',
                            success: 'Verification message sent to your mail!'
                        }
                    );

                } catch (error) {
                    toast.error(error.message);
                }
            },
        });
    return (
        <div className="forgotPassword__main__container container-fluid">

            <div className='forgotPassword__modal__container'>
                <div className="forgotPassword__content">

                    <div className='forgotPassword__title'>Forgot Password</div>
                    <div className='forgotPassword__subtitle'>Please enter your email  </div>
                    <div className="forgotPasswordForm">
                        <form onSubmit={formikForgotPassword.handleSubmit}>
                            <FormInput
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formikForgotPassword.values.email}
                                onChange={formikForgotPassword.handleChange}
                                onBlur={formikForgotPassword.handleBlur}
                                error={formikForgotPassword.errors.email}
                                touched={formikForgotPassword.touched.email}
                            />
                            <button className='submit' type="submit" >Submit </button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ForgotPassword
