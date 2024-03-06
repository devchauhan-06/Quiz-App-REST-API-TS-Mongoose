import axios from 'axios';
const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;


export const registerUser = (userDetails) => axios.post(baseUrl + `/auth`, userDetails, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const logInUser = (userDetails) => axios.post(baseUrl + `/auth/login`, userDetails, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const verifyRegistrationOtp = (otpDetails, token) => axios.post(baseUrl + `/auth/verify-registration-otp/` + token, otpDetails, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const resendRegistrationOtp = (token) => axios.get(baseUrl + `/auth/resend-registration-otp/` + token, {
    headers: {
        'Content-Type': 'application/json'
    }
})

