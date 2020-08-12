import React from 'react';
import axios from "axios";

class Login extends React.Component {
    constructor()
    {
        super();
        this.state={
            email:null,
            dashboard_id: "interview",
            password:null,
        }
    }

    async login ()
    {
        const data = this.state;
        console.log(data);

        const res = await axios.get('https://api.demo.reja.ai/auth', { params: data })
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        window.location = '/dashboard';
    }

render() { 
    console.log(localStorage.getItem("token"));

    return (
    <div>
        <div className='form-group'>
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>{this.setState({email:event.target.value})}} /> 
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>{this.setState({password:event.target.value})}} /> 
            </div>
            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            <div>
            <button onClick={()=>{this.login()}} >Login</button>
        </div>
    </div>
    );
}
}
export default Login;