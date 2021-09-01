import "./login.scss";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [logedIn, setLigedIn] = useState(false);

    const validate = values =>{
        const errors = {};
        if(!values.phoneNo){
            errors.phoneNo = 'شماره همراه خود را وارد کنید';
        }else if(!/^(\+98|0)?9\d{9}$/i.test(values.phoneNo)){
            errors.phoneNo = ' فرمت شماره موبایل صحیح نیست (مثال: 09121234567)';
        }

        if(!values.password){
            errors.password = 'رمز عبور را وارد کنید';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
          phoneNo: '',
          password: ''
        },
        validate,
   
        onSubmit: values => {
          setLigedIn(true);
        },
      });

    return ( 
        <div className="loginContainer">
            <h3>ورود به حساب کاربری</h3>
            <form onSubmit={formik.handleSubmit}>
                
                <input 
                    type="text" 
                    name="phoneNo" 
                    id="phoneNo" 
                    placeholder=" شماره موبایل (مثال: 09121234567)" 
                    onChange={formik.handleChange} 
                    value={formik.values.phoneNo}
                    onBlur={formik.handleBlur} />
                    {formik.touched.phoneNo && formik.errors.phoneNo ? 
                            <div className="error">{formik.errors.phoneNo}</div> : null}
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="رمز عبور" 
                    onChange={formik.handleChange} 
                    value={formik.values.password}
                    onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? 
                            <div className="error">{formik.errors.password}</div> : null}

                {!logedIn && <input type="submit" value="ورود" />}
                {logedIn && <input type="submit" value="فرض کن وارد شدی :)" disabled/>}
                {logedIn && <div id="registered"><Link to="/Timche">برگردیم </Link></div>}

            </form>
        </div>
     );
}
 
export default Login;