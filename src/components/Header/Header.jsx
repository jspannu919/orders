import {useSelector} from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import {Button} from 'antd';
import './header.css';

const Header = (props) => {
    const userObj = useSelector(state => state.LoginReducer.userObj);

    return (
        <header>
            <div className="userInfo">
                <img src={userObj.imageUrl} alt="userPhoto" className="userImg"/>
                <span className="userName">Welcome {userObj.givenName}</span>
            </div>
            <Button type="primary" onClick={props.onNewOrderBtnClick}>New Order</Button>
            <GoogleLogout
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={()=>props.loginActions.logout()}
            />
        </header>
    );
}
 
export default Header;