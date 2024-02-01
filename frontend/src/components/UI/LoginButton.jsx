import styles from './LoginButton.module.css';
import LoginBtn from '../../assets/loginbtn.svg'
import Svg from './Svg';


const LoginButton = () => {
    return (
        <div className="loginBtn">
            <Svg className={styles.para}/>
        </div>
    );
}

export default LoginButton;