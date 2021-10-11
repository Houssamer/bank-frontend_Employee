import React from 'react';
import './style.css'

function Login() {
    return (
        <div className="login_container">
            <h1 className="login_title">Bank</h1>
            <div className="login_body">
                <div className="login_div_input">
                    <label htmlFor="email" className="login_label">Email</label>
                    <input 
                        type="email"  
                        placeholder="Email"
                        className="login_input"
                    />
                </div>
                <div className="login_div_input">
                    <label htmlFor="password" className="login_label">Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        className="login_input"
                    />
                </div>
                <button className="login_button">Login</button>
            </div>
        </div>
    )
}

export default Login
