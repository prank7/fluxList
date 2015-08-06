var React = require('react');

var AddItem = React.createClass({
	render: function(){
		return(
			<input type="text" name="new-item" className="form-control" />
		)
	}
});

module.exports = AddItem;