import React from 'react'
import { Link } from "react-router-dom";
import {login}from '../store/action/authAction'
import { connect } from 'react-redux';


 class Login extends React.Component {

  state = {
   
    email: "",
    password: "",
   
    error: {}
  };

  static getDerivedStateFromProps(nextProps,prevState){
  
    if(JSON.stringify(nextProps.auth.error)!==JSON.stringify(prevState.error)){
      return{
        error:nextProps.auth.error
      }
  
    }
    return null
   }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault()
    let {email, password}=this.state 
    
    this.props.login({email,password})
    this.setState({
      email:'',password:''
    })
    
  };


  render() {

    let { email, password, error } = this.state

    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-4">Register Here</h1>
          <form onSubmit={this.submitHandler}>
            
            <div className="form-group">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                className={error.email ? "form-control is-invalid" : "form-control"}

                placeholder="Enter Your Email"
                name="email"
                id="email"
                value={email}
                onChange={this.changeHandler}
              />
                {error.email && (
                <div className="invalid-feedback">{error.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                className={error.password ? "form-control is-invalid" : "form-control"}
                
                placeholder="Enter Your Password"
                name="password"
                id="password"
                value={password}
                onChange={this.changeHandler}
              />
              {error.password && (
                <div className="invalid-feedback">{error.password}</div>
              )}
            </div>
            
            <span>Don't have a account?<Link to="/register"> Register Here</Link></span>
            <button className="btn btn-primary my-3 d-block">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>({
  auth:state.auth
 
})
export default connect(mapStateToProps,{login})(Login)


