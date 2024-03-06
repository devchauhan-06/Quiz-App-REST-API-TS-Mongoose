import React, { useEffect, useRef, useState } from 'react'
import '../styles/otp.css'
import { useSelector } from 'react-redux';
import { verifyRegistrationOtp, resendRegistrationOtp } from '../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Otp = () => {

    const navigate = useNavigate();

    const data = useSelector((state) => {
        return state.token;
    })

    const token = data.token;

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRef = useRef([]);


    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, [])

    const onOtpSubmit = async (combinedOtp) => {

        try {

            await toast.promise(
                verifyRegistrationOtp({ "otp": combinedOtp }, token).then(res => {
                    console.log(res.data.status)
                    if (res.data.status === 'success') {
                        navigate("/auth")
                    }
                }),
                {
                    pending: 'Your request is being processed...',
                    success: 'Email Verified! Login to continue',
                    error: 'Otp incorrect'
                }
            );

        } catch (error) {
            console.log(error);
        }
    }


    const onResendRegistrationOtp = async () => {

        try {
            await toast.promise(
                resendRegistrationOtp(token).then(res => {
                    console.log(res.data.status)
                    if (res.data.status === 'error') {
                        console.log(res)
                        throw (res);
                    }
                }),
                {
                    pending: 'Your request is being processed...',
                    success: 'OTP sent to your mail!',
                }
            );

        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error.response.data.message);
        }
    }

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp);

        //submit trigger
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === 6) {
            onOtpSubmit(combinedOtp);
        }


        //Move to next input if current field is filled
        if (value && index < 5 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }
    }

    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(1, 1);
    }

    const handleKeyDown = (index, e) => {

        //moving focus to previous input field on backspace
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus();
        }
    }

    return (
        <div className="otp__main__container container-fluid">

            <div className='otp__modal__container text-center'>

                <div className='otp__title'>Confirm OTP</div>
                <div className='otp__subtitle'>We have sent you a 6 digit code  </div>

                {
                    otp.map((value, index) => {
                        return <input
                            key={index}
                            type="text"
                            ref={(input) => (inputRef.current[index] = input)}
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='otpInput'
                        />
                    })
                }

                <div className='otp_resend' onClick={onResendRegistrationOtp}>Resend?</div>

            </div>
        </div>
    )
}

export default Otp
