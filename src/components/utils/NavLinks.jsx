import { Link } from 'react-router-dom'

const NavLinks = () => {
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
      </ul>
    </>
  )
}

export default NavLinks