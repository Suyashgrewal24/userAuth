import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { RegisterNameInput, RegisterPasswordInput, RegisterConfirmPasswordInput, RegiserEmailInput} from "./RegisterInputs"
import { toast } from 'react-toastify';
const Register = () => {

    const [email, setEmail] = useState('') 
    // const [id, setId] = useState('') 

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')



    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        if (password === confPassword) {

            e.preventDefault()
            axios.post("http://localhost:3001/user", {
                name: name,
                email: email,
                password: password,
                
            })
                .then(() => {
                    Navigate('/login');
                    toast.success("Registered Successful")
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            alert("passwords are not same")
        }
    }




    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="text-2xl font-semibold py-4 ">Registration Page</h1>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >

                            {/* Name  */}
                            <RegisterNameInput name={name} setName={setName} />
                            {/* Email  */}
                            <RegiserEmailInput email={email} setEmail={setEmail} />
                            {/* Password  */}

                            <RegisterPasswordInput  password={password} setPassword={setPassword}/>
                            {/* Confirm Password  */}
                            <RegisterConfirmPasswordInput confPassword={confPassword} setConfPassword={setConfPassword} />


                            <button

                                // type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link to='/login'
                                    
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Register
