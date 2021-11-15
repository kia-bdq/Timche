import "./login.scss";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [registered,setRegistered] = useState(false);
    // const history = useHistory();
    
    const validate = values =>{
        const errors = {};
        if(!values.phoneNo){
            errors.phoneNo = 'شماره همراه خود را وارد کنید';
        }else if(!/^(\+98|0)?9\d{9}$/i.test(values.phoneNo)){
            errors.phoneNo = 'فرمت شماره موبایل صحیح نیست (مثال: 09121234567)';
        }

        if(!values.password){
            errors.password = 'رمز عبور را وارد کنید';
        }
        if(!values.confirmPassword){
            errors.confirmPassword = 'تکرار رمز عبور خالی است!';
        } else if(values.password !== values.confirmPassword){
            errors.confirmPassword = 'تکرار رمز عبور با رمز عبور برابر نیست';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
          name: '',  
          phoneNo: '',
          password: '',
          confirmPassword: ''
        },
        validate,
   
        onSubmit: values => {
    
            fetch('https://my-json-server.typicode.com/kia-bdq/fake-server/users/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }).then((res) => {
                if(res.ok){
                    setRegistered(true);
                }
                // history.push('/Timche');
            })
        },
      });

    return ( 
        <div className="loginContainer">
            <h3>ثبت نام</h3>
            <form onSubmit={formik.handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="نام" 
                    onChange={formik.handleChange} 
                    value={formik.values.name}/>

                <input 
                    type="text" 
                    name="phoneNo" 
                    id="phoneNo" 
                    placeholder=" شماره موبایل* (مثال: 09121234567)" 
                    onChange={formik.handleChange} 
                    value={formik.values.phoneNo}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.phoneNo && formik.errors.phoneNo ? 
                        <div className="error">{formik.errors.phoneNo}</div> : null}

                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="رمز عبور*" 
                    onChange={formik.handleChange} 
                    value={formik.values.password}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.password && formik.errors.password ? 
                        <div className="error">{formik.errors.password}</div> : null}

                <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="تکرار رمز عبور*" 
                    onChange={formik.handleChange} 
                    value={formik.values.confirmPassword} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword? 
                        <div className="error">{formik.errors.confirmPassword}</div> : null}

                {!registered && <input type="submit" value="ثبت نام" />}
                {registered && <input type="submit" value="ثبت نام با موفقیت انجام شد" disabled/>}
                {registered && <div id="registered"> این فقط یک تست بود :)  <Link to="/Timche">برگردیم </Link></div>}
            </form>
            
        </div>
     );
}
 
export default Register;