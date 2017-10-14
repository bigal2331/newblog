import React, { Component } from 'react';
import '../App.css';
import Navigation from '../containers/nav';
import { Switch, BrowserRouter,Route } from 'react-router-dom';
import Blog from '../components/blog';
import Home from '../containers/Home';


class Routes extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
    			<Navigation/>
	    		<Switch>
                    <Route exact path="/" component={Home} />
	    			<Route path="/blog" component={Blog} />
	    			
	    		</Switch>
    		</div>
    		
    	</BrowserRouter>
    );
  }
}

export default Routes;
