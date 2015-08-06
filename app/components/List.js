var React = require('react');

var List = React.createClass({
	render: function(){
		return(
			<div>
				<ul className="list-group">
				  <li className="list-group-item">Get Milk</li>
				</ul>
			</div>
		)
	}
});

module.exports = List;