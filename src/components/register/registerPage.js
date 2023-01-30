import LoginHeader from "../header/loginHeader";
import Footer from "../footer/footer";
import Register from "./register";

function RegisterPage () {
    return (
        <div className="login-page-container">
            <LoginHeader />
            <div className="login-page-box">
                <Register></Register>
            </div>
            <Footer/>
        </div>
       
    );
};

export default RegisterPage;

