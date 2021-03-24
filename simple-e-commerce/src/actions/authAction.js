export const login = ({ username, emailAddress }) => {
    return {
        type: 'LOGIN',
        payload: {
            username: username,
            email: emailAddress
        }
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}