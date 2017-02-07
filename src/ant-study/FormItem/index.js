import React from 'react'
var FormItem = React.createClass({
	getInitialState:function(){
		return {
			label:'label',
			value:'123',
			errorMesg:''
		}
	},
	render:function(){
		return (
			<div>
				<p>
					<label>{this.state.label}</label>
					<input
						value={this.state.value}
						onChange={(e)=>this.setState({value:e.target.value})}
					/>
				</p>
			</div>
		)
	}
})
export default FormItem;