import '../../styles/deleteMessage.css';
import close from '../../images/close.png';



function DeleteMessage (props) {
    console.log(props);


    return (
        <div className="Delete-Message-container">
            <div className="back_container">
                
            </div>

            <div className="front_container_delete">
                <div className='delete_alert_box'>
                    <p>Alert</p>
                    <img src={close} alt='close' className='delete_message_exit_img' onClick={() => props.setDelete(false)}></img>
                </div>
                <div className='delete_button_box'>
                    <p>Are you sure want to cancel the order</p>
                    <button onClick={() => props.delete()}>Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteMessage;

