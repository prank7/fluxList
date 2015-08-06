var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({
	render: function() {
		return(
			<div className="col-md-6 col-md-offset-3">
				<div className="colsm-12">
					<h3 className="text-center">List Items</h3>
						
						<AddItem />
						<List />
					
				</div>
			</div>
		)
	}
});

module.exports = ListContainer;