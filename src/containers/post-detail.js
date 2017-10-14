import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PostList from '../containers/post-list'

class PostDetail extends Component {


	render() {

		if(!this.props.activePost){
			return (<h4>Please select a user...</h4>);
		}

		return (
			<div>

				<div className="post-detail">

					<img className="detail-img" src={this.props.activePost.image} />
					<h1>{this.props.activePost.title}</h1>
					<div className="post-text">
						<p>{this.props.activePost.text}</p>
					</div>
				</div>


			</div>
			
		);
	}

}

function mapStateToProps(state){
	return { activePost: state.activePost};
}


export default connect(mapStateToProps)(PostDetail);