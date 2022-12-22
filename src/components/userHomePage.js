import UserHeader from "./userHeader";
import Footer from "./footer";
import UserSideBar from "./userSideBar";
import UserZeroOrders from "./userZeroOrderPage";
import '../styles/userHomePage.css'

function UserHomePage () {
    return (
        <div className="user-home-container">
            <UserHeader />
            <div className="user-main-box">
                <UserSideBar></UserSideBar>
                <UserZeroOrders></UserZeroOrders>
            </div>
            <Footer/>
        </div>
       
    );
};

export default UserHomePage;

