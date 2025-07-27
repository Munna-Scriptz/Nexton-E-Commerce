import React, { useState } from 'react'
import { Link } from 'react-router'
import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {

    const [info , setInfo] = useState({email : '' ,emailError : '' ,emailErrorBorder : 'border-BorderCol'})
    const [passInfo , setPassInfo] = useState({password : '' ,passwordError : '' ,passwordBorder : 'border-BorderCol'})
    const [hidePass , setHidePass] = useState(true)
    const HandleSubmit = (e)=>{
        e.preventDefault()

        if(!info.email){
            setInfo((e)=>({...e , emailError: 'Please enter your email' , emailErrorBorder: 'border-red-600'}))
        }
        if(!passInfo.password){
            setPassInfo((e)=>({...e ,passwordError: 'Please enter your password' , passwordBorder: 'border-red-600'}))
        }
        else{
            console.log('submitted')
        }

    }
  return (
    <>
        <section id='Register_Box' className='mt-[40px] mb-[72px] flex items-center justify-center'>
            <form onSubmit={HandleSubmit} className='lg:w-[440px]'>
                {/* -------Header-------- */}
                <div><h2 className='text-[36px] font-semibold text-second text-center mb-[60px]'>Login</h2></div>

                {/* -------Input Box-------- */}
                <div className='flex flex-col gap-[24px]'>
                    {/* -----Email  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Email</p>
                        <p className='text-red-600 font-medium'>{info.emailError}</p>
                        <input onChange={(e)=>setInfo({email:e.target.value , emailError: '' , emailErrorBorder: 'border-BorderCol'})} className={`w-full border ${info.emailErrorBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`} placeholder='example@example.com' type="email" />
                    </div>
                    {/* -----Password  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Password</p>
                        <p className='text-red-600 font-medium'>{passInfo.passwordError}</p>
                        <div className='relative'>
                            <input onChange={(e)=>setPassInfo({password: e.target.value , passwordError: '' , passwordBorder: 'border-BorderCol'})} className={`w-full border ${passInfo.passwordBorder} rounded-[12px] h-[43px] px-5 outline-none mt-2`} type={hidePass? 'password' : 'text'} />
                            {
                                hidePass?
                                <FiEye onClick={()=>setHidePass(!hidePass)} className='absolute top-5 right-5 text-[20px] cursor-pointer'/>
                                :
                                <FaRegEyeSlash onClick={()=>setHidePass(!hidePass)} className='absolute top-5 right-5 text-[18px] cursor-pointer'/>

                            }
                        </div>
                    </div>
                </div>

                {/* ------Submit Button------ */}
                <div className='mt-[24px] flex flex-col gap-[24px]'>
                    <button className='w-full bg-second rounded-full text-white py-[14px] cursor-pointer'>Continue</button>
                    <p className='text-Primary font-medium text-[14px] text-center'>OR</p>
                    <div>
                        <p className='text-Primary text-base font-normal text-center'>New user? <Link className='text-[#0EA5E9]' to={'/Register'}>Create an account</Link></p>
                    </div>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login