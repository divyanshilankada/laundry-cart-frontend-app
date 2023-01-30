import '../../styles/successfulMessage.css';
import doneIcon from  '../../images/done.png';
import { Link } from "react-router-dom";

function SuccessfulMessage () {
    return (
        <div className="successfulMessage-container">
            <div className="back_container">
                
            </div>

            <div className="front_container">
                <div className='done_box'>
                    <img className='done_img' src={doneIcon} alt='done'></img>
                </div>
                <div className='successful_message_box'>
                    <h2 className='successful_message_h2'>Your order is successfully.</h2>
                    <p className='successful_message_p'>You can track the delivery in the "Orders" section.</p>
                </div>
                {/* <button className='successful_button_nav'></button> */}
                <Link className="successful_button_nav" to="/user"> 
                    <p>Go to orders</p>
                </Link>
            </div>
        </div>
    );
};

export default SuccessfulMessage;

