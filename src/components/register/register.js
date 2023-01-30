import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../../styles/register.css';
import checkbox from'../../images/checkbox.png';
import tick from'../../images/tick_checkbox.png';
import axios from 'axios';


function Register () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [state, setState] = useState(" ");
    const [city, setCity] = useState(" ");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [stateError, setStateError] = useState(" ");
    const [cityError, setCityError] = useState(" ");
    const [addressError, setAddressError] = useState("");
    const [pincodeError, setPincodeError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    function handleClick()
    {
        const obj = {firstName:firstName,
                        lastName:lastName,
                        email:email,
                        phoneNumber:phoneNumber,
                        state:state,
                        city:city,
                        address:address,
                        pincode:pincode,
                        password:password,
                        confirmPassword:confirmPassword
        }

                        setFirstNameError("");
                        setLastNameError("");
                        setEmailError("");
                        setPasswordError("");
                        setPhoneNumberError("");
                        setStateError(" ");
                        setCityError(" ");
                        setAddressError("");
                        setPincodeError("");
                        setConfirmPasswordError("");

            if(firstName==="" || lastName==="" || phoneNumber === "" || email === "" || state ===" " || city===" "||address==="" || pincode==="" || password==="" || confirmPassword==="")
            {
                alert("All fields are mandatory");
                return;
            }

      
            axios.post("https://laundry-cart-backend-komp.onrender.com/register",obj)
                .then((data) => {

                    if(data.status === 200)
                    {
                        navigate("/");
                        return;
                    }

                    
                    if(data.data.error !== undefined)
                    {
                        let error = data.data.error.errors;
                    
                        for(let i=0; i<error.length; i++)
                        {

                            if(error[i].param === "firstName")
                            {
                                setFirstNameError(error[i].msg);
                            }
                            else if(error[i].param === "lastName")
                            {
                                setLastNameError(error[i].msg);
                            }
                            else if(error[i].param === "phoneNumber")
                            {
                                setPhoneNumberError(error[i].msg);
                            }
                            else if(error[i].param === "email")
                            {
                                setEmailError(error[i].msg);
                            }
                            else if(error[i].param === "state")
                            {
                                setStateError(error[i].msg);
                            }
                            else if(error[i].param === "city")
                            {
                                setCityError(error[i].msg);
                            }
                            else if(error[i].param === "password")
                            {
                                setPasswordError(error[i].msg);
                            }
                            else if(error[i].param === "confirmPassword")
                            {
                                setConfirmPasswordError(error[i].msg);
                            }
                            else if(error[i].param === "address")
                            {
                                setAddressError(error[i].msg);
                            }
                            else if(error[i].param === "pincode")
                            {
                                setPincodeError(error[i].msg);
                            }
                            
                        }

                    
                    }
                    
                    if(data.data.errorPassword)
                    {
                        setConfirmPasswordError(data.data.errorPassword)
                    }
                    if(data.data.emailError)
                    {
                        setEmailError(data.data.emailError)
                    }
                    if(data.data.phoneNumberError)
                    {
                        setPhoneNumberError(data.data.phoneNumberError)
                    }                  
                
                })
                .catch((error) => console.log(error));

                return;
        
        


    }

    return (
        <div className="resgister-container">
            <div className="register_box">
                <div className='Laundry_register_main_box'>
                    <h1 className='register_h1'>Laundry Service</h1>
                    <p className='register_p_one'>Doorstep Wash & <br></br>Dryclean Service</p>
                    <p className='register_p_two'>Already Have An Account?</p>
                    <Link className='register_login_button' to="/">Sign In</Link>
                </div>
                <div className='register_middle_box'>
                    <div className='register_middle'></div>
                </div>
                <div className='register_input_container'>
                    <h2 className='register_h2'>Register</h2>
                    <div className='register_input_box'>
                        <div>
                            <div className='input_name_err_box'>
                                {firstName !== "" ?<h5 className='register_input_h5'>First Name</h5> :null}
                                {firstNameError!=="" ? <span>{firstNameError}</span> : null}
                            </div>
                            <input className='register_input' type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {lastName !== "" ?<h5 className='register_input_h5'>Last Name</h5> :null}
                                {lastNameError!=="" ? <span>{lastNameError}</span> : null}
                            </div>
                            <input className='register_input' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {phoneNumber !== "" ?<h5 className='register_input_h5'>Phone</h5> :null}
                                {phoneNumberError!=="" ? <span>{phoneNumberError}</span> : null}
                            </div>
                            <div className='phone_box'>
                                <select className='phone_option_outline'>
                                    <option >+91</option>
                                </select>
                                <input className='register_input' type="text" maxLength="10" placeholder='Phone' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                            </div>
                        </div>
                        
                        <div>
                            <div className='input_name_err_box'>
                                {email !== "" ?<h5 className='register_input_h5'>Email</h5> :null}
                                {emailError!=="" ? <span>{emailError}</span> : null}
                            </div>
                            <input className='register_input' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {state !== " " ?<h5 className='register_input_h5'>State</h5> :null}
                                {stateError!=="" ? <span>{stateError}</span> : null}
                            </div>
                            <select className={state!==" " ? `register_select` : `select_regis`} onChange={(e) => setState(e.target.value)}>
                                <option value=" ">State</option>
                                <option value="Karnataka">Karnataka</option>
                            </select>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {city !== " " ?<h5 className='register_input_h5'>City</h5> :null}
                                {cityError!=="" ? <span>{cityError}</span> : null}
                            </div>
                            <select className={city!==" " ? `register_select` : `select_regis`} onChange={(e) => setCity(e.target.value)}>
                                <option value=" ">City</option>
                                <option value="Bangalore">Bangalore</option>
                            </select>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {address !== "" ?<h5 className='register_input_h5'>Address</h5> :null}
                                {addressError!=="" ? <span>{cityError}</span> : null}
                            </div>
                            <input className='register_input' type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {pincode !== "" ?<h5 className='register_input_h5'>Pincode</h5> :null}
                                {pincodeError!=="" ? <span>{pincodeError}</span> : null}
                            </div>
                            <input className='register_input' type="text" placeholder='Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}></input>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {password !== "" ?<h5 className='register_input_h5'>Password</h5> :null}
                                {passwordError!=="" ? <span>{passwordError}</span> : null}
                            </div>
                            <input className='register_input' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <div className='input_name_err_box'>
                                {confirmPassword !== "" ?<h5 className='register_input_h5'>Confirm Password</h5> :null}
                                {confirmPasswordError!=="" ? <span>{confirmPasswordError}</span> : null}
                            </div>
                            <input className='register_input' type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        </div>
                    </div>

                    <div className='checkbox_container'>
                        <span className='checkbox_box' onClick={() => setCheck(!check)}>
                            <img src={checkbox} alt='checkbox' ></img>
                           {check ? <img src={tick} className="tick" alt='tick'></img> : null}
                        </span>
                        <p className='reg_checkbox_p'>I agree to Terms & Condition receiving marketing and promotional materials</p>
                    </div>

                    <div className='register_component_button_box'>
                        <button className='register_component_button'  onClick={handleClick}>Register</button>
                    </div>
                    
                </div>
            </div>
        </div>
       
    );
};

export default Register;

