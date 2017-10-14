import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PostDetail from '../containers/post-detail';
import PostList from '../containers/post-list';
import {connect} from 'react-redux';

class Blog extends Component {

	render() {

		return(
			<div>
				<PostList />
				<PostDetail />
			</div>
		);
	}

}

export default connect(state => state)(Blog);
