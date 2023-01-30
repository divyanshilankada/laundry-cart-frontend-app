import UserHeader from "../header/userHeader";
import Footer from "../footer/footer";
import UserSideBar from "../user/userSideBar";
import OrderProducts from "../createOrder/orderProducts";
import '../../styles/createOrdersPage.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function CreateOrderPage () {

    const navigate = useNavigate();
    console.log(localStorage.getItem('token'));


    useEffect(() => {
        if(localStorage.getItem('token') === null)
        {
            navigate("/");
            return;
        }
    },[]);

    return (
        <>
        { localStorage.getItem('token') !== null ? 
        <div className="create-order-container">
            <UserHeader />
            <div className="create-order-box">
                <UserSideBar></UserSideBar>
                <OrderProducts></OrderProducts>
            </div>
            <Footer/>
        </div>
       :null}
       </>
    );
};

export default CreateOrderPage;

