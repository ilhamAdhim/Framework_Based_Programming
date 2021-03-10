import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    Redirect
} from "react-router-dom";

export default function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public page</Link>
                    </li>
                    <li>
                        <Link to="/private">Private page</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/public"> <PublicPage /> </Route>
                    <Route path="/login"> <LoginPage /> </Route>
                    <PrivateRoute path="/private"> <ProtectedPage /> </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );

}

const fakeAuth = {
    isAuthenticated : false,
    authenticate(cb){
        fakeAuth.isAuthenticated = true;
        setTimeout(cb,100) //fake async
    },
    signout(cb){
        fakeAuth.isAuthenticated = false;
        setTimeout(cb,100) //fake async
    }
};

function AuthButton(){
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome! {" "}
            <button onClick={() => {
                fakeAuth.signout(() => history.push("/"))
            }}>
                Sign Out
            </button>
        </p>
    ) : (
        <p> You are not logged in </p>
    )
}

function PrivateRoute({children, ...rest}){
    return( 
        <Route {...rest} render={({location}) => fakeAuth.isAuthenticated ? (children) : 
        <Redirect to= {{
            pathname: "/login",
            state: {from: location}
        }} />} />
    )
}

function PublicPage(){
    return <h3>Public</h3>
}

function ProtectedPage(){
    return <h3>Private</h3>
}

function LoginPage(){
    let history = useHistory()
    let location = useLocation()

    let {from } = location.state || { from : {pathname : "/"}}
    let login = ()=> {
        fakeAuth.authenticate(() => history.replace(from))
    }

    return (
        <div>
            <p> You must login to view the page at {from.pathname} </p>
            <button onClick={login}>Login</button>
            
        </div>
    )

}