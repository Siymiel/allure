import TextInput from "../utils/TextInput"
import LabelField from "../utils/LabelField"
import Button from "../utils/Button"
import { Logo2 } from "../utils/Logo"
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className="mt-28">
    <Logo2 />
    <form className="grid items-center border border-gray-400 py-7 px-10 shadow-lg mt-5">
        <h4 className="text-3xl font-light pb-5 uppercase">Login</h4>
        <div className="grid">
            <LabelField title="Email"/>
            <TextInput type="email" placeholder="Email Address"/>
        </div>
        <div className="grid pt-4">
            <LabelField title="Password"/>
            <TextInput type="password" placeholder="Password"/>
        </div>
        <div className="flex justify-between items-center pt-4">
            <div className="flex space-x-2 items-center">
                <input type="checkbox" className="w-4 h-4 shadow-md"/>
                <span className="text-sm font-light">Remember me</span>
            </div>
            <Link to="/" className="text-sm font-light text-[#C3129B]">Forgot password?</Link>
        </div>
        <Link to="/register" className="text-[#C3129B] font-light mt-4 text-sm">Don't have an Account yet?</Link>
        <div className="pt-5">
            <Button title="Submit"/>
        </div>
    </form>
    </div>
  )
}

export default LoginForm