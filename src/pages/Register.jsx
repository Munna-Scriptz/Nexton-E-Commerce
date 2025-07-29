import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const Register = () => {
    // --------------Email Error 
    const [username , setUsername] = useState('')
    const [usernameError , setUsernameError] = useState('')
    const [UsernameBorder, setUsernameBorder] = useState('border-BorderCol')
    // --------------Email Error 
    const [email , setEmail] = useState('')
    const [emailError , setEmailError] = useState('')
    const [ErrorBorder , setErrorBorder] = useState('border-BorderCol')
    // --------------Password Error 
    const [pass , setPass] = useState('')
    const [passError , setPassError] = useState('')
    const [PassErrorBorder , setPassErrorBorder] = useState('border-BorderCol')

    // --------------Password again Error 
    const [passAgain , setPassAgain] = useState('')
    const [passErrorAgain , setPassErrorAgain] = useState('')
    const [AgainErrorBorder , setAgainErrorBorder] = useState('border-BorderCol')
    // ----------password Show/hide 
    const [showPass , setShowPass] = useState(false)
    const [showPassAgain , setShowPassAgain] = useState(false)

    // ---------Error Fun 
    const HandleSubmit = (e) =>{
        e.preventDefault()

        if(!username){
            setUsernameError('Please enter your email')
            setUsernameBorder('border-red-600')
        }
        if(!email){
            setEmailError('Please enter your email')
            setErrorBorder('border-red-600')
        }
        if(!pass){
            setPassError('Please enter your Password')
            setPassErrorBorder('border-red-600')
        }
        if(!passAgain){
            setPassErrorAgain('Please enter your Password Again')
            setAgainErrorBorder('border-red-600')
        }
        else(
            
            // -------------User reg api 
            axios.post(`https://api.escuelajs.co/api/v1/users/` , {
                name:username,
                email:email,
                password:pass,
                avatar: "https://picsum.photos/800"
            })
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{console.log(err)}),
            toast.success('Registration  Completed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
        )
    }
  return (
    <>
        <section id='Register_Box' className='mt-[40px] mb-[72px] flex items-center justify-center'>
            <form onSubmit={HandleSubmit} className=' lg:w-[440px]'>
                {/* -------Header-------- */}
                <div><h2 className='text-[36px] font-semibold text-second text-center mb-[60px]'>Register</h2></div>
                {/* -------Input Box-------- */}
                <div className='flex flex-col gap-[24px] select-none'>
                    {/* -----Username  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Username</p>
                        <p className='text-red-600 font-medium'>{usernameError}</p>
                        <input onChange={(e)=>{setUsername(e.target.value) , setUsernameError('') , setUsernameBorder('border-BorderCol')}} className={`w-full border ${UsernameBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`} placeholder='Your username' type="username" />
                    </div>
                    {/* -----Email  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Email</p>
                        <p className='text-red-600 font-medium'>{emailError}</p>
                        <input onChange={(e)=>{setEmail(e.target.value) , setEmailError('') , setErrorBorder('border-BorderCol')}} className={`w-full border ${ErrorBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`} placeholder='example@example.com' type="email" />
                    </div>
                    {/* -----Password  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Password</p>
                        <p className='text-red-600 font-medium'>{passError}</p>
                        <div className='relative'>
                            <input onChange={(e)=>{setPass(e.target.value) , setPassError('') , setPassErrorBorder('border-BorderCol')}} className={`w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2 ${PassErrorBorder}`} type={showPass? 'text' : 'password'} />
                            {
                                showPass?
                                <FaRegEyeSlash onClick={()=>setShowPass(!showPass)} className='absolute top-5 right-5 text-[21px] cursor-pointer'/>
                                :
                                <FiEye onClick={()=>setShowPass(!showPass)} className='absolute top-5 right-5 text-[18px] cursor-pointer'/>
                            }
                        </div>
                    </div>
                    {/* -----Password again */}
                    <div>
                        <p className='text-base font-semibold text-second'>Password (Again)</p>
                        <p className='text-red-600 font-medium'>{passErrorAgain}</p>
                        <div className='relative'>
                            <input onChange={(e)=>{setPassAgain(e.target.value) , setPassErrorAgain('') , setAgainErrorBorder('border-BorderCol')}} className={`w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2 ${AgainErrorBorder}`} type={showPassAgain? 'text' : 'password'} />
                            {
                                showPassAgain?
                                <FaRegEyeSlash onClick={()=>setShowPassAgain(!showPassAgain)} className='absolute top-5 right-5 text-[21px] cursor-pointer'/>
                                :
                                <FiEye onClick={()=>setShowPassAgain(!showPassAgain)} className='absolute top-5 right-5 text-[18px] cursor-pointer'/>
                            }
                        </div>
                    </div>
                </div>

                {/* ------Submit Button------ */}
                <div className='mt-[24px] flex flex-col gap-[24px]'>
                    <button className='w-full bg-second rounded-full text-white py-[14px] cursor-pointer'>Continue</button>
                    <p className='text-Primary font-medium text-[14px] text-center'>OR</p>
                    <div>
                        <p className='text-Primary text-base font-normal text-center'>Already a member? <Link className='text-[#0EA5E9]' to={'/Login'}>Login</Link></p>
                    </div>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register