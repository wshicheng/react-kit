import React from 'react';

var Input = React.createClass({
	render:function(){
		return (
			<input onKeyDown={this.keyDown} value={this.props.value} onChange={this.props.onChange}/>
		)
	},
	keyDown:function(e){
		if(e.which===13){
			this.props.onPressEnter(e);
		}
	}
})
export default Input