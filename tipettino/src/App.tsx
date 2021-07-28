import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Index from './pages/index/Index';
import Error404 from './pages/error';
import Classmates from './pages/class/class'

const App = () => {
	return (
		<Router basename="/">
			<Switch>
				<Route exact path="/" component={Index} />
				<Route exact path="/home" component={Index} />
				<Route exact path="/index" component={Index} />
				<Route exact path="/index.html" component={Index} />
				<Route exact path="/fotoregistro" component={Classmates} />
				<Route path="/" component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
