import UserHeader from "./userHeader";
import Footer from "./footer";
import UserSideBar from "./userSideBar";
import OrderProducts from "./orderProducts";
import '../styles/createOrdersPage.css';


function CreateOrderPage () {
    return (
        <div className="create-order-container">
            <UserHeader />
            <div className="create-order-box">
                <UserSideBar></UserSideBar>
                <OrderProducts></OrderProducts>
            </div>
            <Footer/>
        </div>
       
    );
};

export default CreateOrderPage;

