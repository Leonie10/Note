import styles from './LoginButton.module.css';
import LoginBtn from '../../assets/loginbtn.svg'
import Svg from './Svg';
import { Link } from 'react-router-dom';


const LoginButton = () => {

    return (
        <div className="loginBtn">
                <Link to="/auth">
                    <Svg />
                </Link>
        </div>
    );
}

export default LoginButton;