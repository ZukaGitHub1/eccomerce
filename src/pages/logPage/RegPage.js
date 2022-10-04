
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/custom/custominput/CustomInput";
import { RegSchema } from "../../schema/LoginSchema";
const RegPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "",
  firstname: "",
  lastname: "",
  password:"",
  age:""});

  // function handleOnChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   setUser({
  //     ...user,
  //     [name] : value,
  //   });
  // }
 
  const onSubmit = async (values, actions) => {
   
    await new Promise((val) => setTimeout(val, 1000));
    actions.resetForm();
    navigate('/login')
  };

  console.log(user);

  return (
    <div>
      <div className="container-login-div">
        <div className="screen">
          <div className="screen__content">
            <h1>Registration</h1>
            <Formik
             initialValues={user}
            validationSchema= {RegSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <CustomInput
                  label="FirstName"
                  name="firstname"
                  id="firstname"
                  type="firsname"
                
                />
                <CustomInput
                  label="LastName"
                  name="lastname"
                  id="lastname"
                  type="lastname"
                  
                />
                <CustomInput
                  label="Age"
                  name="age"
                  id="age"
                  type="number"
                
                />
                <CustomInput
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
            
                />
                <CustomInput
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
              
                />

                <button type="submit" className="login__submit ">
                  Sign Up
                </button>
               
              </Form>
            </Formik>
             {/* <button> Login</button> */}
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegPage;
