
export default function(state=null, action) {

	switch(action.type){
		case 'POST_SELECTED' :
				return action.payload;
				break;
	}

	return state;

}