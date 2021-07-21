import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Index from "./pages/index/Index";
import NotExist from './pages/error'

const App = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/home" component={Index} />
                <Route path="/" component={NotExist} />
            </Switch>
        </Router>
    )
}

export default App