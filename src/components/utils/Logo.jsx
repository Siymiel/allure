import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
        <Link to="/">
          <img className='w-full h-8 object-cover object-center' src="https://alluretechnology.africa/wp-content/uploads/2022/04/allure_header_logo-1.png" alt="logo"/>
        </Link>
    </>
  )
}

export default Logo