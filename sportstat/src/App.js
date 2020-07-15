import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/styles/App.css';
import TopBar from './components/topbar.jsx';
import Footer from './components/footer.jsx';
import Main from './components/main/main.jsx';

function App() {
  return (
  	<Router>
	  	<Switch>
	  		<React.Fragment>
	  			<TopBar/>
	  			<Route exact path="/" component={Main}/>
	  			<Footer/>
	  		</React.Fragment>
	  	</Switch>
  	</Router>
  );
}

export default App;
