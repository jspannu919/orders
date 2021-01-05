import {useSelector} from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import './header.css';

const Header = (props) => {
    console.log(props)
    const userObj = useSelector(state => state.LoginReducer.userObj);

    return (
        <header>
            <div className="userInfo">
                <img src={userObj.imageUrl} alt="userPhoto" className="userImg"/>
                <span className="userName">Welcome {userObj.givenName}</span>
            </div>
            <GoogleLogout
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={()=>props.loginActions.logout()}
            />
        </header>
    );
}
 
export default Header;