var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');

var ListContainer = React.createClass({
	getInitialState: function(){
		return {
			list: todoStore.getList()
		}
	},
	componentDidMount: function(){
    todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    todoStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
  	this.setState({
  		list: todoStore.getList()
  	})
  },
	handleAddItem: function(newItem){
		todoActions.addItem(newItem);
	},
	render: function() {
		return(
			<div className="col-md-6 col-md-offset-3">
				<div className="col-sm-12">
					<h3 className="text-center">List Items</h3>
						<AddItem add={this.handleAddItem} />
						<List items={this.state.list}/>
				</div>
			</div>
		)
	}
});

module.exports = ListContainer;