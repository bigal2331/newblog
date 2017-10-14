import {combineReducers} from 'redux';
import PostReducer from './reducer-posts';
import ActivePostReducer from './reducer-active-post';

const allReducers = combineReducers({
	posts: PostReducer,
	activePost: ActivePostReducer

});


export default allReducers;