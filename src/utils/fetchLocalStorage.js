export const userInfo = ()=>{
    let user;
    if(localStorage.getItem('user') !== 'undefined'){
        user = JSON.parse(localStorage.getItem('user'))
    }else{
        user = null
    }
    return user
}