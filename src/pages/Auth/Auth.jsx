import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'

const Auth = () => {
    return (
        <div className='Auth'>
            <div className='a-left'>
                <img src={Logo} alt='' />
                <div className='webname'>
                    <h1>FUN Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <Login/>
            {/* <SignUp/> */}
        </div>
    )
}

function Login() {
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Login</h3>
                
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Username"
                    />
                </div>
                <div>
                   <input type='text' placeholder='Password' className='infoInput' name='password' />
                </div>
                <div>
                    <span>
                        Don't have an account Sign up
                        
                    </span>
                    <button className='button infoButton' type='submit'>Login</button>
                </div>
                
            </form>
        </div>
    )
}

function SignUp() {
    return (
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input type='text' placeholder='First Name' className='infoInput' name='firstname' />
                    <input type='text' placeholder='Last Name' className='infoInput' name='lastname' />
                </div>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Usernames"
                    />
                </div>
                <div>
                    <input type='text' placeholder='Password' className='infoInput' name='password' />
                    <input type='text' placeholder='Confirm Password' className='infoInput' name='confirmpass' />
                </div>
                <div>
                    <span>
                        Already have an account. Login!
                    </span>
                </div>
                <button className='button infoButton' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth