import * as yup from 'yup';
const passwordRules =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
export let LoginShcema = yup.object().shape({
  email:yup.string().email().required('Please Enter your email'),
  password:yup
  .string()
  .required('Please Enter your password')
  .min(4, "password is not correct")
})
export let RegSchema = yup.object().shape({
  firstname: yup.string().min(5).required('Please Enter your FirstName'),
  lastname : yup.string().min(5).required('Please Enter your LastName'),
  email:yup.string().email().required('Please Enter Example@example.com'),
  age:yup.number().required('Please Enter your Age').min(18, 'Please Enter above 18').max(88, 'Please Enter below 32' ) , 
  password:yup
  .string()
  .required('Please Enter your password')
  .min(4)
  .matches(
   passwordRules,
    "Password is not Correct"
  )
})