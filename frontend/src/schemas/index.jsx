import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(4, "Name must be at least 4 characters long").max(25).required("Please enter your name"),
    email: Yup.string().email("Enter a valid email").required("Please enter your email"),
    password: Yup.string().min(8, 'Must be at least 8 characters long')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Must contain at least one digit')
        .matches(/[$@!#*]/, 'Must contain at least one special character')
        .required("Please enter your password"),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});

export const logInSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Please enter your email"),
    password: Yup.string().min(8, 'Must be at least 8 characters long')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Must contain at least one digit')
        .matches(/[$@!#*]/, 'Must contain at least one special character')
        .required("Please enter your password"),
});