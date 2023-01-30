import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../../styles/login.css';
import lock from '../../images/padlock.png'
import axios from 'axios';


function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [lockStatus, setLockStatus] = useState(true);

    const navigate = useNavigate();

    function handleClick()
    {
        axios.post("https://laundry-cart-backend-komp.onrender.com/login",{username:username,password:password})
            .then((data) => {

                setPasswordError("");
                setUsernameError("");

                if(data.status === 202)
                {
                    if(data.data.errorUsername)
                    {
                        setUsernameError(data.data.errorUsername);
                    }
                    else if(data.data.errorPassword)
                    {
                        setPasswordError(data.data.errorPassword)
                    }
                }
                else
                {
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("username", data.data.name);

                    setTimeout(() => {
                        localStorage.removeItem("token", data.data.token);
                        localStorage.removeItem("username", data.data.name);
                        console.log("Logout");
                        navigate("/");
                    },1800000);
                    navigate("/user");

                    console.log(data);
                }
                




            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="login-container">
            <div className="loginbox">
                <div className='Laundry_main_box'>
                    <h1 className='login_h1'>Laundry Service</h1>
                    <p className='login_p_one'>Doorstep Wash & Dryclean Service</p>
                    <p className='login_p_two'>Don’t Have An Account?</p>
                    <Link className='login_register_button' to="/register">Register</Link>
                </div>
                <div className='login_middle_box'>
                    <div className='login_middle'></div>
                </div>
                <div className='login_main_box'>
                    <h1 className='login_main_h1'>SIGN IN</h1>
                    <div className='login_input_box'>
                        <div>
                            {username!=="" ? <h5 className='login_input_h5'>Mobile / Email</h5>:null}
                            <input type="text" className={usernameError!=="" ? `input_box input_box_login_error_colour` : `input_box`} placeholder='Mobile / Email' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                            {usernameError!=="" ? <p className='login_p_error'>{usernameError}</p>:null}
                        </div>
                        <div>
                            {password!=="" ? <h5 className='login_input_h5'>Password</h5>:null}
                            <div className='login_password_box'>
                                <input type={lockStatus ? `password` : `text`} className={passwordError!=="" ? `input_box input_box_login_error_colour` : `input_box`} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>  
                                <img src={lock} alt='lock' className='lock_img' onClick={() => setLockStatus(!lockStatus)}></img>              
                            </div>
                            {passwordError!=="" ? <p className='login_p_error'>{passwordError}</p>:null}
                        </div>
                        
                    </div>
                    <div className='login_button_box'>
                        <button className='login_button' onClick={handleClick}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Login;

