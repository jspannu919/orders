import {GoogleLogin} from 'react-google-login';
import './login.css';

const Login = (props) => {
    //if login is successful, update userObject in redux store
    function responseGoogle(response){
        if(response.profileObj){
            props.loginActions.login(response.profileObj);
        }
        else{
            console.log(response);
        }
    }

    return ( 
        <div className="login">
            <div className="loginText">Welcome</div>
            <div className="loginSubText">Please Login to Proceed</div>
            <GoogleLogin 
                buttonText="Login"
                clientId={process.env.REACT_APP_CLIENT_ID}
                onSuccess={responseGoogle}
                cookiePolicy="single_host_origin"
            />
        </div>
     );
}
 
export default Login;
