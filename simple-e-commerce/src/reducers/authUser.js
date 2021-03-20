export const authUser = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            // TODO Login algorithm
            break;
        case 'LOGOUT':
            // TODO Logout algorithm
            break;
        default:
            return state
    }
}