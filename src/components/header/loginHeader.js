import { Link } from 'react-router-dom';
import '../../styles/loginHeader.css';


function LoginHeader () {
    return (
        <header className="loginHeader-container">
            <h4 className="loginHeader_h4">LAUNDRY</h4>
            <div className="loginHeader_menuBox">
                <div className="loginHeader_menu_p">Home</div>
                <div className="loginHeader_menu_p">Pricing</div>
                <div className="loginHeader_menu_p">Career</div>
                <Link className="loginHeader_menu_signin" to="/">Sign In</Link>
            </div>
        </header>
    );
};

export default LoginHeader;

