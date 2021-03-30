export const authUser = (state = { status: true }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = {
                ...action.payload,
                status: true
            }
        case 'LOGOUT':
            return state = {
                ...action.payload,
                status: false
            }
        default:
            return state
    }
}