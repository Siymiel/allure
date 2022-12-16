import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { attemptLogout } from '../../redux/apis/userApiCalls';

const NavLinks = () => {
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const email = user?.email;
    const handleLogout = (e) => {
        e.preventDefault()
        attemptLogout(dispatch, {email})
    }
    
    return (
        <>
            <ul className='flex items-center space-x-5 font-light'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>About</li>
                <li>
                    <Link to="/store-listings">
                        Find a Store
                    </Link>
                </li>
                <li>
                    <Link to="/questions">
                        FAQs
                    </Link>
                </li>
                <li>Blog</li>
                <li>Contact</li>
                { user?.accessToken ? 
                <li onClick={handleLogout} className="cursor-pointer">Logout</li> :  
                <Link to="/register" className="cursor-pointer">Register</Link> 
                }
        </ul>
        </>
    )
}

export default NavLinks