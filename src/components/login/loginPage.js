import LoginHeader from "../header/loginHeader";
import Footer from "../footer/footer";
import Login from "./login";
import '../../styles/createOrdersPage.css';


function LoginPage () {
    return (
        <div className="login-page-container">
            <LoginHeader />
            <div className="login-page-box">
                <Login></Login>
            </div>
            <Footer/>
        </div>
       
    );
};

export default LoginPage;

