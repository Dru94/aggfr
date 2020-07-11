import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/styles/App.css';
import TopBar from './containers/topbar.jsx';
import Main from './containers/main/main.jsx';

function App() {
  return (
  	<Router>
	  	<Switch>
	  		<React.Fragment>
	  			<TopBar/>
	  			<Route exact path="/" component={Main}/>
	  			<Route path='*' component={ ()=> <h3>The Page You Requested Does Not Exist.</h3> }/>
	  		</React.Fragment>
	  	</Switch>
  	</Router>
  );
}

export default App;
