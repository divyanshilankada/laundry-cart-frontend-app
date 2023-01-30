import '../../styles/userHeader.css';
import user from '../../images/user.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function UserHeader () {

    const [logout,setLogout] = useState(true);
    const navigate = useNavigate();

    function handleClick() 
    {

        
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            console.log("Logout");
            navigate("/");
    
        

    };

    return (
        <header className="userHeader-container">
            <h4 className="userHeader_h4">LAUNDRY</h4>
            <div className="userHeader_menuBox">
                <div className="userHeader_menu_p">Pricing</div>
                <div className="userHeader_menu_p">Career</div>
                <div className="userHeader_menu_username_box" onMouseEnter={() => setLogout(false)} onMouseLeave={() => setLogout(true)} onClick={handleClick}>
                    <div className="userHeader_menu_username_pic">
                        <img className="userHeader_displayPicture" src={user} alt='user'></img>
                    </div>
                    <p className="userHeader_menu_username" >{logout ? localStorage.getItem("username") : `Logout`}</p>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;

