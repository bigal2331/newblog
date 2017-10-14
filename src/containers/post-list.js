import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPost} from '../actions/select-post'

class PostList extends Component {
	createPostList() {
		return this.props.posts.map((post) => {

			return (
				<div className="post" key={post.id} onClick={() => this.props.selectPost(post)}>
					<img src={post.image} alt="nothing to show here" className="thumb-nail"/>

					<h4>{post.title}</h4>

				</div>

			);

		});
	}

	render() {
		return (
			<div>
				{this.createPostList()}
			</div>
			

		);
	}

}

function mapStateToProps(state){
	return {
		posts: state.posts
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({selectPost: selectPost}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList);