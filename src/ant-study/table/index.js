import React from 'react';
var Thead = React.createClass({
	render:function(){
		var arr = this.props.columns;
		var list = arr.map(function(ele,index){
			return (
				<th key={ele.key}>{ele.title}</th>
			)
		});
		return (
			<thead>
				<tr>
					{list}
				</tr>
			</thead>
		)
	}
});
var Tbody = React.createClass({
	render:function(){
		var arr = this.props.dataSource;
		var list = arr.map(function(ele,index){
			return (
				<tr key={ele.key}>
					<td key={ele.name}>{ele.name}</td>
					<td key={ele.age}>{ele.age}</td>
					<td key={ele.address}>{ele.address}</td>
				</tr>
			)
		});
		return (
			<tbody>
				{list}
			</tbody>
		)
	}
});
var Table = React.createClass({
	render:function(){
		return (
			<table>
				<Thead columns={this.props.columns}/>
				<Tbody dataSource={this.props.dataSource} />
			</table>
		)
		
	}
	
})
export default Table