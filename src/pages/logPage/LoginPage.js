import React  from "react";
import CustomInput from "../../components/custom/custominput/CustomInput";
import { Formik, Form  } from "formik";
import { LoginShcema } from "../../schema/LoginSchema";
import { useNavigate } from "react-router-dom";
;
const LoginPage = () => {
     const navigate = useNavigate();
 
  const onSubmit = async (values, actions) => {
    await new Promise((val) => setTimeout(val, 1000));
    actions.resetForm();
    navigate('/main');
  };

  return (
    <div className="container-login-div">
      <div className="screen">
        <div className="screen__content">
          <h1>login</h1>
          <Formik     initialValues={{ email: "", password: "",  acceptedTos: false }}
      validationSchema={LoginShcema}
      onSubmit={onSubmit}   >
             <Form >
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

              <button   className="login__submit ">
                log in now
              </button>
             
            </Form>
          </Formik>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
