var React = require('react');

var AddItem = React.createClass({

	handleSubmit: function(e){
		if (e.keyCode == 13) {
			var newItem = this.refs.newItem.getDOMNode().value;
			this.refs.newItem.getDOMNode().value = '';
			this.props.add(newItem);
		}
	},

	render: function(){
		return(
			<input type="text" name="new-item" ref="newItem" className="form-control" onKeyDown={this.handleSubmit} />
		)
	}
});

module.exports = AddItem;