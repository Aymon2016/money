
import Axios from 'axios'
import jwtDecode from "jwt-decode"
import setAuthToken from '../../utilis/setAuthorization'




export const register = (user) => dispatch => {

 Axios.post('/api/users/register',user)
        .then(res=>{
            console.log(res)
            dispatch({
                type:"USERS_ERROR",
                payload: {
                    error: {}
                }
            })
            
        })
        .catch(error =>{
            console.log(error)
            dispatch({
                type:"USERS_ERROR",
                payload:error.response.data
            })
        })
}
export const login = (user) =>dispatch=>{
    Axios.post('/api/users/login',user)
        .then(res =>{
            
            let token = res.data.token
            localStorage.setItem('auth_token',token)
            setAuthToken(token)
            let decode = jwtDecode(token)
            console.log(decode)
            dispatch({
                type:'SET_USER',
                payload:{
                    user:decode
                }
            })
        })
        .catch(error =>{
            console.log(error.response.data)
            dispatch({
                type:"USERS_ERROR",
                payload:error.response.data
            })
        })
}

export const logout =props=>{
    localStorage.removeItem('auth_token')
    return{
        type:'SET_USER',
        payload:{
            user:{}
        }
    }
}
