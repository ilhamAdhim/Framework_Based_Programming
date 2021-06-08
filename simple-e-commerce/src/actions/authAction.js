import firebase from "firebase"
import { myFirebase } from "../firebase";
import { addDataFirebase, readDataFirebase, updateDataFirebase } from "../firebase/services";
import { emptyCart } from "./cartAction";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};
const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};
const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};
const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};
const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
}; const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};
const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};
const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

export const login = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            // Do something with the error if you want! 
            dispatch(loginError());
        });
};

export const logout = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout())
            dispatch(emptyCart())
        })
        .catch(error => {
            // Do something with the error if you want! 
            dispatch(logoutError());
        });
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};

export const loginWithGoogle = (role) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
            if (res.user) {
                // ? Check if the user is registered in firebase db or not yet
                let ref = myFirebase.database().ref(`users/${role}/${res.user.uid}`)
                readDataFirebase(ref).then(response => {
                    if (response === null) {
                        addDataFirebase(`users/${role}/${res.user.uid}/`, { accountStatus: 'registered' })
                            .then(() => dispatch(receiveLogin(res.user)))
                    } else {
                        updateDataFirebase(`users/${role}/${res.user.uid}/`, { ...response })
                            .then(() => dispatch(receiveLogin(res.user)))
                    }
                })
            }
        }).catch((error) => {
            console.log(error.message)
        })
}