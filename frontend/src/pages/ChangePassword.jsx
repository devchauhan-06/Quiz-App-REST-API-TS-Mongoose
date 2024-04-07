import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { changePasswordSchema } from '../schemas'
import FormInput from '../components/FormInput/FormInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { changePassword } from '../api/api';

const ChangePassword = () => {
    const location = useLocation();
    const path = location.pathname;
    const userId = path.substring(path.lastIndexOf('/') + 1, path.length);
    console.log(userId);

    const navigate = useNavigate();

    const formikChangePassword =
        useFormik({
            initialValues: {
                password: '',
                confirmPassword: ''
            },
            validationSchema: changePasswordSchema,
            onSubmit: async (values, action) => {
                try {
                    console.log(values);
                    await toast.promise(
                        changePassword(values, userId).then(res => {
                            console.log(res.data.status)
                            if (res.data.status === 'success') {
                                action.resetForm();
                                navigate("/auth");
                            }
                        }),
                        {
                            pending: 'Your request is being processed...',
                            success: 'Password changed succesfully!'
                        }
                    );

                } catch (error) {
                    toast.error(error.message);
                }
            },
        });
    return (
        <div className="forgotPassword__main__container container-fluid">

            <div className='forgotPassword__modal__container changePassword__modal'>
                <div className="forgotPassword__content">
                    <div className='forgotPassword__title changePassword_header'>Change Password</div>
                    <div className='forgotPassword__subtitle'>Enter new password </div>
                    <div className="forgotPasswordForm changePasswordForm">
                        <form onSubmit={formikChangePassword.handleSubmit}>
                            <FormInput
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formikChangePassword.values.password}
                                onChange={formikChangePassword.handleChange}
                                onBlur={formikChangePassword.handleBlur}
                                error={formikChangePassword.errors.password}
                                touched={formikChangePassword.touched.password}
                            />

                            <FormInput
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={formikChangePassword.values.confirmPassword}
                                onChange={formikChangePassword.handleChange}
                                onBlur={formikChangePassword.handleBlur}
                                error={formikChangePassword.errors.confirmPassword}
                                touched={formikChangePassword.touched.confirmPassword}
                            />
                            <button className='submit changePassword_submit' type="submit" >Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
