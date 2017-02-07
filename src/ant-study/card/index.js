import React from 'react';
import './index.css'
var Card=React.createClass({
	render:function(){
		return(
			<div className="card">
				{this.props.children}
			</div>
		)
	},
	getChildContext:function(){
		return {
			current:this.props.current
		}
	},
	childContextTypes:{
		current:React.PropTypes.number
	}
})
var Title = React.createClass({
	contextTypes:{
		current:React.PropTypes.number
	},
	render:function(){
		var active='';
		
		if(this.props.index===this.context.current){
			active = 'active';
			
		}
		return(
			<div onClick={this.props.onClick} className={"title "+active}>{this.props.children}</div>
		)
	}
})
var TitleBar = React.createClass({
	render:function(){
		return(
			<div className="titleBar">
				{this.props.children}
			</div>
		)
	}
})
var ContentBar = React.createClass({
	render:function(){
		return(
			<div className="contentBar">
				{this.props.children}
			</div>
		)
	}
})
var Content = React.createClass({
	contextTypes:{
		current:React.PropTypes.number
	},
	render:function(){
		var active='';
		
		if(this.props.index===this.context.current){
			active = 'active';
			
		}
		return(
			<div className={"content "+active}>{this.props.children}</div>
		)
	}
})
Card.Title = Title;
Card.TitleBar = TitleBar;
Card.Content = Content;
Card.ContentBar = ContentBar;
export default Card;