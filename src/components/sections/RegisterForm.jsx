import TextInput from "../utils/TextInput"
import LabelField from "../utils/LabelField"
import Button from "../utils/Button"
import { Logo2 } from "../utils/Logo"
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <div className="mt-5">
    <Logo2 />
    <form className="grid items-center border border-gray-400 py-7 px-10 shadow-lg mt-5">
        <h4 className="text-3xl font-light pb-5 uppercase">Register</h4>
        <div className="grid">
            <LabelField title="FirstName"/>
            <TextInput type="text" placeholder="First Name"/>
        </div>
        <div className="grid pt-4">
            <LabelField title="LastName"/>
            <TextInput type="text" placeholder="Last Name"/>
        </div>
        <div className="grid pt-4">
            <LabelField title="Email"/>
            <TextInput type="email" placeholder="Email Address"/>
        </div>
        <div className="grid pt-4">
            <LabelField title="Password"/>
            <TextInput type="password" placeholder="Password"/>
        </div>
        <div className="flex space-x-2 items-center pt-5">
            <input type="radio" className="w-4 h-4 shadow-md"/>
            <span className="text-sm font-light">I am a customer</span>
        </div>
        <div className="flex space-x-2 items-center pt-2">
            <input type="radio" className="w-4 h-4 shadow-md"/>
            <span className="text-sm font-light">I am a vendor</span>
        </div>
        <Link to="/login" className="text-[#C3129B] font-light mt-4 text-sm">Already have an account?</Link>
        <div className="pt-7">
            <Button title="Submit"/>
        </div>
    </form>
    </div>
  )
}

export default RegisterForm