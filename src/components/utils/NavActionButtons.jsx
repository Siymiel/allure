import { HiOutlineUser } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import { Badge } from "@material-ui/core";
import { Link } from 'react-router-dom';


const NavActionButtons = () => {
  return (
    <>
      <ul className='flex items-center space-x-3'>
        <li>
          <Link to="/login">
            <HiOutlineUser className='w-5 h-5'/>
          </Link>
        </li>
        <li className='pl-2'>
          <MdFavoriteBorder className='w-5 h-5'/>
        </li>
        <li className='pl-2'>
          <Link to="/cart">
              <Badge badgeContent={0} color="primary">
                <BsCart3 className='w-5 h-5'/>
              </Badge>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavActionButtons