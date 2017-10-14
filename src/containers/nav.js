import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logoWt.png';


class Navigation extends Component{


	render(){

		return(
			// <BrowserRouter history={browserHistory}>
				<div className="App">
					<div className="topnav">
						<Link to="/"><img src={logo} className="App-logo"/></Link>			  
						
						<Link to="/blog" className="btns">Blog</Link>
						<Link to="/" className="btns">Home</Link>
						
						<a href="javascript:void(0);" id="icon">&#9776;</a>				
					</div>
				</div>
			// </BrowserRouter>
		);
	};
}

export default Navigation;