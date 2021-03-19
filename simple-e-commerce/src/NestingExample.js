import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,
    useRouteMatch
} from "react-router-dom";

export default function NestingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route path="/topics"> <Topics /> </Route>
                </Switch>
            </div>
        </Router>
    );

    // We can use these components as pages in our website

    function Home() {
        return (
            <div>
                <h2>Home </h2>
            </div>
        )
    }

    function Topics(){
        // this is path to call <Route> in parent route
        // the url will used as link connection
        let { path, url } = useRouteMatch();
        return(
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
                    </li>
                    <li>
                        <Link to={`${url}/Wisata Alam, Museum`}>Travelling</Link>
                    </li>
                    <li>
                        <Link to={`${url}/Ibis, Jw Marriot`}>Review Hotel</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path={path}> <h3>Please select a  topic</h3> </Route>
                    <Route path={`${path}/:topicId`}> <Topic /> </Route>
                </Switch>
            </div>
        )
    }

    function Topic(){
        let { topicId } = useParams()
        return(
            <div>
                <h3> {topicId} </h3>
            </div>
        )
    }
}
