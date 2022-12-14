


const init = {
    isAuthenticated:false,
    user:{},
    error:{}
}

const authReducer = (state = init,action)=>{

    switch(action.type){
        case 'SET_USER':{
            return{
                user:action.payload.user,
                isAuthenticated:Object.keys(action.payload.user).length !== 0,
                error:{}
            }
        }
        case 'USER_ERROR':{
            return{
                ...state,
                error:action.payload
            }
        }
        default:return state
    }
}
export default authReducer