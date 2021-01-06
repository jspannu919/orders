import { useSelector } from "react-redux";
import { GoogleLogout } from "react-google-login";
import { Tooltip } from "antd";
import "./header.css";

const Header = (props) => {
  const userObj = useSelector((state) => state.LoginReducer.userObj);

  function getUserInfo() {
    return (
      <>
        <span>Email: {userObj.email}</span>
        <br />
        <span>FullName: {userObj.name}</span>
      </>
    );
  }

  return (
    <header>
      <Tooltip placement="bottomLeft" title={getUserInfo()}>
        <div className="userInfo">
          <img src={userObj.imageUrl} alt="userPhoto" className="userImg" />
          <span className="userName">Welcome {userObj.givenName}</span>
        </div>
      </Tooltip>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={() => props.loginActions.logout()}
      />
    </header>
  );
};

export default Header;
