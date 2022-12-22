import '../styles/userHeader.css';
import user from '../images/user.png';


function UserHeader () {
    return (
        <header className="userHeader-container">
            <h4 className="userHeader_h4">LAUNDRY</h4>
            <div className="userHeader_menuBox">
                <p className="userHeader_menu_p">Pricing</p>
                <p className="userHeader_menu_p">Career</p>
                <div className="userHeader_menu_username_box">
                    <div className="userHeader_menu_username_pic">
                        <img className="userHeader_displayPicture" src={user} alt='user'></img>
                    </div>
                    <p className="userHeader_menu_username">User Name</p>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;

