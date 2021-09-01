import "./index.scss";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    return ( 
        <div className="mainContainer">
            <div className="island">
                <div className="rightCol">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/login.png`} alt="login" />
                </div>
                <div className="leftCol">
                    <div className="changeContainer">
                        <div className="change">
                            <div id="login" onClick={() => setIsLogin(true)} className={isLogin? "innerChange active" : "innerChange"}>ورود</div>
                            <div id="register" onClick={() => setIsLogin(false)} className={isLogin? "innerChange " : "innerChange active"}>ثبت نام</div>
                        </div>
                    </div>
                    {isLogin && <Login />}
                    {!isLogin && <Register />}
                </div>
            </div>
        </div>
     );
}
 
export default LoginRegister;