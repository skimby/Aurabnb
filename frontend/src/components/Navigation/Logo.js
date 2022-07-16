import logo from '../../images/airbnb-logo.png';
import { useHistory } from 'react-router-dom';

const Logo = () => {
    const history = useHistory();
    const clickLogo = () => {
        history.push('/');
    }
    return (
        <ul className='nav-left'>
            <li >
                <div className='logo-box' onClick={clickLogo}>
                    <img src={logo} alt='airbnb logo' width='100%' />
                </div>
            </li>
        </ul>
    )
}
export default Logo;
