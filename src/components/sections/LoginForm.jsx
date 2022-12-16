import { useState } from "react"
import TextInput from "../utils/TextInput"
import LabelField from "../utils/LabelField"
import Button from "../utils/Button"
import { Logo2 } from "../utils/Logo"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { attemptLogin } from "../../redux/apis/userApiCalls"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        attemptLogin(dispatch, { email, password });
    }

    return (
        <div className="mt-28">
        <Logo2 />
        <form className="grid items-center border border-gray-400 py-7 px-10 shadow-lg mt-5" onSubmit={handleLogin}>
            <h4 className="text-3xl font-light pb-5 uppercase">Login</h4>
            <div className="grid">
                <LabelField title="Email"/>
                <TextInput name="email" type="email" placeholder="Email Address" handleclick={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="grid pt-4">
                <LabelField title="Password"/>
                <TextInput name="password" type="password" placeholder="Password" handleclick={(e) => setPassword(e.target.value)}/>
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
                <Button title="Submit" type="submit"/>
            </div>
        </form>
        </div>
    )
}

export default LoginForm