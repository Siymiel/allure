import { HiOutlineUser } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import { Badge } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
 

const NavActionButtons = () => {
  const cartQuantity = useSelector(state => state.cart.cartQuantity)
  const user = useSelector(state => state.user.currentUser);

  return (
    <>
      <ul className='flex items-center space-x-3'>
        <li className='flex items-center space-x-1'>
          {user && <p className='capitalize text-sm'>{user?.firstname}</p>}
          <Link to="/login">
            <HiOutlineUser className='w-5 h-5'/>
          </Link>
        </li>
        <li className='pl-2'>
          <Link to="/wishlist">
            <MdFavoriteBorder className='w-5 h-5'/>
          </Link>
        </li>
        <li className='pl-2'>
          <Link to="/cart">
              <Badge badgeContent={cartQuantity} color="primary" overlap="rectangular">
                <BsCart3 className='w-5 h-5'/>
              </Badge>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavActionButtons