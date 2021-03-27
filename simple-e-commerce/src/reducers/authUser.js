export const authUser = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = {
                ...action.payload,
                status: true
            }
        case 'LOGOUT':
            return state = false
        default:
            return state
    }
}