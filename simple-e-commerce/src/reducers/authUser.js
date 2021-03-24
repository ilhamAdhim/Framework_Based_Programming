export const authUser = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = {
                ...action.payload,
                status: true
            }
            break;
        case 'LOGOUT':
            return state = false
            break;
        default:
            return state
    }
}