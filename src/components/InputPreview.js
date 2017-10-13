import React from 'react';
export default class InputPreview extends React.Component {
    render() {
        return (
            
            <div> 
                <input 
                    type="text" 
                    value={this.props.value} 
                    onChange={event => this.props.onChange(event.target.value)}
                />
            </div> 
            
        );
    }
}