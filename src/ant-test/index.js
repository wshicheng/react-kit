import React from 'react';
import {Button,Col,Row,Table} from 'antd'
import 'antd/dist/antd.css'
var header=[
		{title:'name',dataIndex:'name'},
		{title:'age',dataIndex:'age'},
		{title:'sex',dataIndex:'sex'}
	];
	var data=[
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
		{name:'ryan',age:17,sex:'boy'},
		{name:'biak',age:22,sex:'girl'},
		{name:'brown',age:19,sex:'boy'},
	];
var ReactTest = React.createClass({
	
	getInitialState:function(){
			return{
				value:'aaa'
			}
	},
	render:function(){
		return (
			
			<div>
				<Row>
					<Col span='12'>
						<Button type='dashed'>button</Button>
					</Col>
				</Row>
				<Row>
					<Table dataSource={data} columns={header}/>
				</Row>
			</div>
		)
	}
	
})
export default ReactTest