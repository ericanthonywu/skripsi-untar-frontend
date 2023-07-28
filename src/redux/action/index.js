export const login = payload => {
    return {
        type: 'login',
        payload:payload
    }
}
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('profile_picture');
    localStorage.removeItem('_id');
    return {
        type: 'logout'
    }
}