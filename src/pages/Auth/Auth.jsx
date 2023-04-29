import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
    };
    
    const [isSignUp, setIsSignUp] = useState(false)
    const [data, setData] = useState(initialState)
    const [confirmPass, setConfirmPass] = useState(true);
    const loading = useSelector((state) => state.authReducer.loading)
    const dispatch = useDispatch()
   
    // Reset Form
    const resetForm = () => {
        setData(initialState)
        setConfirmPass(confirmPass)
    }
    //handle Change in input
    const handleChange = (e) => {
        console.log(e.target.name)
        setData({...data, [e.target.name]: e.target.value})
    }
   
    const handleSubmit = (e) => {
        
        setConfirmPass(true)
        e.preventDefault()
        if (isSignUp) {
            if (data.password === data.confirmpass) {
                dispatch(signUp(data))
            } else {
                setConfirmPass(false)
            }
        } else {
            dispatch(logIn(data))
        }
        
    }
    return (
        // left side
        <div className='Auth'>
            <div className='a-left'>
                <img src={Logo} alt='' />
                <div className='webname'>
                    <h1>FUN Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            {/* right side */}
            <div className='a-right'>
                <form className='infoForm authForm' onSubmit = {handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
                    {isSignUp &&
                        (<div>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='infoInput'
                            name='firstname' 
                            value={data.firstname}
                            onChange={handleChange}
                            />
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='infoInput'
                            name='lastname' 
                            value={data.lastname}
                            onChange={handleChange}
                            />
                        </div>)
                    }

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            placeholder='Password'
                            className='infoInput'
                            name='password' 
                            value={data.password}
                            onChange={handleChange}
                            />
                        {isSignUp && (<input
                            type='password'
                            placeholder='Confirm Password'
                            className='infoInput'
                            name='confirmpass' 
                            onChange={handleChange}
                            />)}
                    </div>
                    <span style={{
                        color: "red",
                        fontSize: "12px",
                        alignSelf: "flex-end",
                        marginRight: "5px",
                        display: confirmPass ? "none" : "block"
                    }}>*Confirm password is not same</span>
                    <div>
                        <span
                            style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                resetForm();
                                setIsSignUp((prev) => !prev);
                            }}
                        >
                            {isSignUp
                                ? "Already have an account Login"
                                : "Don't have an account Sign up"}
                        </span>
                        <button
                            className="button infoButton"
                            type="Submit"
                            disabled= {loading}
                        >
                            {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
                        </button>
                    </div>

                </form>
            </div>
            {/* <Login/> */}
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