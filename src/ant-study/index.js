import React from 'react';
import Table from './table'
import Input from './input'
var AntStudy = React.createClass({
	getInitialState:function(){
			return{
				value:'a55aa'
			}
	},
	render:function(){
		const dataSource = [{
							  key: '1',
							  name: '胡彦斌',
							  age: 32,
							  address: '西湖区湖底公园1号'
							}, {
							  key: '2',
							  name: '胡彦祖',
							  age: 42,
							  address: '西湖区湖底公园1号'
							}];
							
		const columns = [{
						  title: '姓名',
						  dataIndex: 'name',
						  key: 'name',
						}, {
						  title: '年龄',
						  dataIndex: 'age',
						  key: 'age',
						}, {
						  title: '住址',
						  dataIndex: 'address',
						  key: 'address',
						}];
		return (
			<div>
				<h3>ant-study</h3>
				<Input onPressEnter={this.handleEnter} value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
				<Table dataSource={dataSource} columns={columns} />
			</div>
		)
	},
	handleEnter:function(e){
		console.log(e.target.value)
	}
})
export default AntStudy