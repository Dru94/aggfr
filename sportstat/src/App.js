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
		  		<div className="appArea">
		  			<TopBar/>
		  			<Main/>
		  			<Footer/>
		  		</div>
	  		</React.Fragment>
	  	</Switch>
  	</Router>
  );
}

export default App;
