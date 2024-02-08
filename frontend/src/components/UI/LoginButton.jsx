import styles from './LoginButton.module.css';
import { Link } from 'react-router-dom';
import SvgLogin from './SVG/SvgLogin';


const LoginButton = () => {

    return (
        <div className="loginBtn">
                <Link to="/auth">
                    <SvgLogin />
                </Link>
        </div>
    );
}

export default LoginButton;