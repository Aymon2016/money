import React from 'react'
import { Link, NavLink} from 'react-router-dom'
// import { connect } from 'react-redux'
// import {logout} from '../../store/action/authAction'

class Navigation extends React.Component {

   
    render() {
        
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link to='/'>
                    <span className='navbar-brand'>Money APP</span>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    dataToggle='collapse'
                    dataTarget='#nav'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='nav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' activeClassName='active' exact>
                                <span className='nav-link'>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        
                           
                                
                                    <li className='nav-item'>
                                        <NavLink to='/dashboard' activeClassName='active'>
                                            <span className='nav-link'>
                                                Dashboard
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/' activeClassName='active'>
                                            <span className='nav-link'>
                                                Logout
                                            </span>
                                        </NavLink>
                                    </li>
                                
                                 
                                    <li className='nav-item'>
                                        <NavLink to='/login' activeClassName='active'>
                                            <span className='nav-link'>
                                                Login
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='/register' activeClassName='active'>
                                            <span className='nav-link'>
                                                Register
                                            </span>
                                        </NavLink>
                                    </li>
                               
                        

                    </ul>
                </div>
            </nav>
        )
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth
// })

export default Navigation